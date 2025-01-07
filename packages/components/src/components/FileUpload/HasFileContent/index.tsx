import { FileUploadHasFileContentProps } from "@arkyn/types";
import {
  File,
  FileArchive,
  FileAudio,
  FileImage,
  RefreshCw,
} from "lucide-react";

import { Button } from "../../Button";
import { Divider } from "../../Divider";
import { IconButton } from "../../IconButton";
import { Tooltip } from "../../Tooltip";

import "./styles.css";

function HasFileContent(props: FileUploadHasFileContentProps) {
  const {
    disabled,
    file,
    isLoading,
    acceptFile,
    changeFileButtonText,
    handleSelectFile,
    reSendFile,
  } = props;

  function handleClick() {
    if (disabled) return;

    const input = document.createElement("input");

    input.type = "file";
    input.accept = acceptFile;

    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) handleSelectFile(file);
    };

    input.click();
  }

  function FileIcon() {
    if (file.type.startsWith("image/")) return <FileImage />;
    if (file.type.startsWith("audio/")) return <FileAudio />;
    if (file.type.startsWith("application/zip")) return <FileArchive />;
    return <File />;
  }

  return (
    <div className="arkynFileUploadHasFileContent">
      <section className="arkynFileUploadFileContainer">
        <FileIcon />
        <p>{file.name}</p>
      </section>

      <Divider />

      <div className="arkynFileUploadButtonsContainer">
        {!!reSendFile && (
          <Tooltip orientation="bottom" text="Reenviar arquivo">
            <IconButton
              type="button"
              aria-label="resend file"
              variant="outline"
              scheme="danger"
              size="sm"
              isLoading={isLoading}
              onClick={reSendFile}
              icon={RefreshCw}
              disabled={disabled}
            />
          </Tooltip>
        )}

        <Button
          isLoading={isLoading}
          onClick={handleClick}
          variant="outline"
          size="sm"
          type="button"
          disabled={disabled}
        >
          {changeFileButtonText}
        </Button>
      </div>
    </div>
  );
}

export { HasFileContent };
