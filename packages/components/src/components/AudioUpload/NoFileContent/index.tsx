import { Button } from "@arkyn/components";
import { AudioUploadNoFileContentProps } from "@arkyn/types";
import { DragEvent } from "react";

import "./styles.css";

function NoFileContent(props: AudioUploadNoFileContentProps) {
  const {
    dropAudioText,
    isLoading,
    acceptAudio,
    handleSelectFile,
    selectAudioButtonText,
    disabled,
  } = props;

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    if (disabled) return;

    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) handleSelectFile(file);
  }

  function handleClick() {
    if (disabled) return;

    const input = document.createElement("input");

    input.type = "file";
    input.accept = acceptAudio;

    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) handleSelectFile(file);
    };

    input.click();
  }

  return (
    <div onDrop={handleDrop} className="arkynAudioUploadNoFileContent">
      <Button
        isLoading={isLoading}
        onClick={handleClick}
        variant="ghost"
        size="sm"
        type="button"
        disabled={disabled}
      >
        {selectAudioButtonText}
      </Button>

      <p>{dropAudioText}</p>
    </div>
  );
}

export { NoFileContent };
