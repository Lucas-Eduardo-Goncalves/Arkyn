import { Button, IconButton, Tooltip } from "@arkyn/components";
import { HasFileContentProps } from "@arkyn/types";

import { RefreshCw } from "lucide-react";
import "./styles.css";

function HasFileContent(props: HasFileContentProps) {
  const {
    filePath,
    isLoading,
    acceptImage,
    changeImageButtonText,
    handleSelectFile,
    reSendImage,
  } = props;

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
    <div
      className="arkynImageUploadHasFileContent"
      style={{ backgroundImage: `url(${filePath})` }}
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
          />
        </Tooltip>
      )}

      <Button
        isLoading={isLoading}
        onClick={handleClick}
        variant="outline"
        size="sm"
        type="button"
      >
        {changeImageButtonText}
      </Button>
    </div>
  );
}

export { HasFileContent };
