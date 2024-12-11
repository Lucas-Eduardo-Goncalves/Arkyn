import { ImageUploadHasFileContentProps } from "@arkyn/types";
import { RefreshCw } from "lucide-react";

import { Button } from "../../Button";
import { IconButton } from "../../IconButton";
import { Tooltip } from "../../Tooltip";

import "./styles.css";

function HasFileContent(props: ImageUploadHasFileContentProps) {
  const {
    disabled,
    filePath,
    isLoading,
    acceptImage,
    changeImageButtonText,
    handleSelectFile,
    reSendImage,
  } = props;

  function handleClick() {
    if (disabled) return;

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
    <div
      className="arkynImageUploadHasFileContent"
      style={{ backgroundImage: `url("${filePath}")` }}
    >
      {reSendImage && (
        <Tooltip orientation="bottom" text="Reenviar imagem">
          <IconButton
            type="button"
            aria-label="resend image"
            variant="outline"
            scheme="danger"
            size="sm"
            isLoading={isLoading}
            onClick={reSendImage}
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
        {changeImageButtonText}
      </Button>
    </div>
  );
}

export { HasFileContent };
