import { AudioUploadProps } from "@arkyn/types";
import { useState } from "react";

import { useFieldErrors } from "../../hooks/useFieldErrors";

import { AudioUploadError } from "./AudioUploadError";
import { AudioUploadLabel } from "./AudioUploadLabel";
import { HasFileContent } from "./HasFileContent";
import { NoFileContent } from "./NoFileContent";

import "./styles.css";

function AudioUpload(props: AudioUploadProps) {
  const {
    name,
    label,
    fileName = "file",
    method = "POST",
    onUpload,
    fileResponseName = "url",
    selectAudioButtonText = "Selecionar arquivo de áudio",
    dropAudioText = "Ou arraste e solte um arquivo de áudio aqui",
    changeAudioButtonText = "Trocar arquivo de áudio",
    acceptAudio = "audio/*",
    action,
    defaultValue = "",
    showAsterisk = false,
    disabled = false,
  } = props;

  const fieldErrors = useFieldErrors();
  const fieldError = fieldErrors[name];

  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [filePath, setFilePath] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);

  async function handleUploadAudio(file: File) {
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
        setError("Erro ao enviar audio");
      })
      .finally(() => setIsLoading(false));
  }

  function handleSelectFile(file: File) {
    if (disabled) return;

    console.log(file.type);

    if (file.type.indexOf("audio") === -1) {
      setError("O arquivo selecionado não é um arquivo de áudio");
      return;
    }

    setFilePath(URL.createObjectURL(file));
    handleUploadAudio(file);
  }

  const errorMessage = fieldError || error;

  const hasErrorClassName = errorMessage ? "hasError" : "noHasError";
  const hasImageClassName = filePath ? "hasAudio" : "noHasAudio";
  const className = `arkynAudioUpload ${hasErrorClassName} ${hasImageClassName}`;

  return (
    <div className="arkynAudioUploadContainer">
      {label && <AudioUploadLabel label={label} showAsterisk={showAsterisk} />}

      <div className={className}>
        <input type="hidden" name={name} value={value || ""} />

        {!filePath && (
          <NoFileContent
            disabled={disabled}
            isLoading={isLoading}
            acceptAudio={acceptAudio}
            dropAudioText={dropAudioText}
            handleSelectFile={handleSelectFile}
            selectAudioButtonText={selectAudioButtonText}
          />
        )}

        {filePath && (
          <HasFileContent
            filePath={filePath}
            acceptAudio={acceptAudio}
            changeAudioButtonText={changeAudioButtonText}
            disabled={disabled}
            handleSelectFile={handleSelectFile}
            isLoading={isLoading}
            reSendAudio={
              !!errorMessage && file ? () => handleUploadAudio(file) : undefined
            }
          />
        )}
      </div>

      {errorMessage && <AudioUploadError error={errorMessage} />}
    </div>
  );
}

export { AudioUpload };
