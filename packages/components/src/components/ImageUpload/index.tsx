import { ImageUploadProps } from "@arkyn/types";
import { useState } from "react";

import { useFieldErrors } from "../../hooks/useFieldErrors";

import { HasFileContent } from "./HasFileContent";
import { ImageUploadError } from "./ImageUploadError";
import { ImageUploadLabel } from "./ImageUploadLabel";
import { NoFileContent } from "./NoFileContent";

import "./styles.css";

function ImageUpload(props: ImageUploadProps) {
  const {
    name,
    defaultValue = "",
    label,
    showAsterisk = false,
    action,
    fileName = "file",
    method = "POST",
    acceptImage = "image/*",
    fileResponseName = "url",
    changeImageButtonText = "Alterar imagem",
    selectImageButtonText = "Selecionar imagem",
    dropImageText = "Ou arraste e solte a imagem aqui",
    onUpload,
  } = props;

  const fieldErrors = useFieldErrors();
  const fieldError = fieldErrors[name];

  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [filePath, setFilePath] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);

  async function handleUploadImage(file: File) {
    setIsLoading(true);
    setFile(file);
    setError("");

    const formData = new FormData();
    formData.append(fileName, file);

    await fetch(action, { method: method, body: formData })
      .then(async (response) => await response.json())
      .then((response) => {
        if (!!response?.error) setError(response.error);
        else setValue(response?.[fileResponseName]);
        onUpload && onUpload(response?.[fileResponseName]);
      })
      .catch((error) => {
        console.error(error);
        setError("Erro ao enviar imagem");
      })
      .finally(() => setIsLoading(false));
  }

  function handleSelectFile(file: File) {
    setFilePath(URL.createObjectURL(file));
    handleUploadImage(file);
  }

  const errorMessage = fieldError || error;

  const hasErrorClassName = errorMessage ? "hasError" : "noHasError";
  const hasImageClassName = filePath ? "hasImage" : "noHasImage";
  const className = `arkynImageUpload ${hasErrorClassName} ${hasImageClassName}`;

  return (
    <div className="arkynImageUploadContainer">
      {label && <ImageUploadLabel label={label} showAsterisk={showAsterisk} />}

      <div className={className}>
        <input type="hidden" name={name} value={value || ""} />

        {!filePath && (
          <NoFileContent
            isLoading={isLoading}
            acceptImage={acceptImage}
            dropImageText={dropImageText}
            handleSelectFile={handleSelectFile}
            selectImageButtonText={selectImageButtonText}
          />
        )}

        {filePath && (
          <HasFileContent
            isLoading={isLoading}
            acceptImage={acceptImage}
            filePath={filePath}
            handleSelectFile={handleSelectFile}
            changeImageButtonText={changeImageButtonText}
            reSendImage={
              !!errorMessage && file ? () => handleUploadImage(file) : undefined
            }
          />
        )}
      </div>

      {errorMessage && <ImageUploadError error={errorMessage} />}
    </div>
  );
}

export { ImageUpload };
