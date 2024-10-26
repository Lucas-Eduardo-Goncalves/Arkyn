import { ImageUploadErrorProps } from "@arkyn/types";
import "./styles.css";

function ImageUploadError(props: ImageUploadErrorProps) {
  const { error } = props;
  const className = `arkynImageUploadError`;

  if (error) return <strong className={className}>{error}</strong>;
  return <></>;
}

export { ImageUploadError };
