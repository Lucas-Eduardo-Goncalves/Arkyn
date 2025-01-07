import { FileUploadProps } from "@arkyn/types";
import { useState } from "react";

import { FileUploadError } from "./FileUploadError";
import { FileUploadLabel } from "./FileUploadLabel";
import { HasFileContent } from "./HasFileContent";
import { NoFileContent } from "./NoFileContent";

import { useFieldErrors } from "../../hooks/useFieldErrors";

import "./styles.css";

function FileUpload(props: FileUploadProps) {
  const {
    name,
    label,
    showAsterisk = false,
    action,
    fileName = "file",
    method = "POST",
    acceptFile = "*",
    fileResponseName = "url",
    changeFileButtonText = "Alterar arquivo",
    selectFileButtonText = "Selecionar arquivo",
    dropFileText = "Ou arraste e solte o arquivo aqui",
    onUpload,
    disabled = false,
  } = props;

  const fieldErrors = useFieldErrors();
  const fieldError = fieldErrors[name];

  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleUploadFile(file: File) {
    if (disabled) return;

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
        setError("Erro ao enviar o arquivo");
      })
      .finally(() => setIsLoading(false));
  }

  function handleSelectFile(file: File) {
    if (disabled) return;
    handleUploadFile(file);
  }

  const errorMessage = fieldError || error;

  const hasErrorClassName = errorMessage ? "hasError" : "noHasError";
  const hasFileClassName = file ? "hasFile" : "noHasFile";
  const className = `arkynFileUpload ${hasErrorClassName} ${hasFileClassName}`;

  return (
    <div className="arkynFileUploadContainer">
      {label && <FileUploadLabel label={label} showAsterisk={showAsterisk} />}

      <div className={className}>
        <input type="hidden" name={name} value={value || ""} />

        {!file && (
          <NoFileContent
            disabled={disabled}
            isLoading={isLoading}
            acceptFile={acceptFile}
            dropFileText={dropFileText}
            handleSelectFile={handleSelectFile}
            selectFileButtonText={selectFileButtonText}
          />
        )}

        {file && (
          <HasFileContent
            disabled={disabled}
            isLoading={isLoading}
            acceptFile={acceptFile}
            file={file}
            handleSelectFile={handleSelectFile}
            changeFileButtonText={changeFileButtonText}
            reSendFile={
              !!errorMessage && file ? () => handleUploadFile(file) : undefined
            }
          />
        )}
      </div>

      {errorMessage && <FileUploadError error={errorMessage} />}
    </div>
  );
}

export { FileUpload };
