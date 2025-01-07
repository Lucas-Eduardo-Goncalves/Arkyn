import { FileUploadErrorProps } from "@arkyn/types";
import "./styles.css";

function FileUploadError(props: FileUploadErrorProps) {
  const { error } = props;
  const className = `arkynFileUploadError`;

  if (error) return <strong className={className}>{error}</strong>;
  return <></>;
}

export { FileUploadError };
