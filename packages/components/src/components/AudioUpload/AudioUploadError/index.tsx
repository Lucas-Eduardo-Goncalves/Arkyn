import { AudioUploadErrorProps } from "@arkyn/types";
import "./styles.css";

function AudioUploadError(props: AudioUploadErrorProps) {
  const { error } = props;
  const className = `arkynAudioUploadError`;

  if (error) return <strong className={className}>{error}</strong>;
  return <></>;
}

export { AudioUploadError };
