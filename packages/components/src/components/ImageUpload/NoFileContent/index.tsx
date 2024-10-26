import { Button } from "@arkyn/components";
import { NoFileContentProps } from "@arkyn/types";
import { DragEvent } from "react";

import "./styles.css";

function NoFileContent(props: NoFileContentProps) {
  const {
    dropImageText,
    isLoading,
    acceptImage,
    handleSelectFile,
    selectImageButtonText,
  } = props;

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) handleSelectFile(file);
  }

  function handleClick() {
    const input = document.createElement("input");

    input.type = "file";
    input.accept = acceptImage;

    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) handleSelectFile(file);
    };

    input.click();
  }

  return (
    <div onDrop={handleDrop} className="arkynImageUploadNoFileContent">
      <Button
        isLoading={isLoading}
        onClick={handleClick}
        variant="ghost"
        size="sm"
        type="button"
      >
        {selectImageButtonText}
      </Button>

      <p>{dropImageText}</p>
    </div>
  );
}

export { NoFileContent };
