import { AudioUploadLabelProps } from "@arkyn/types";
import "./styles.css";

function AudioUploadLabel(props: AudioUploadLabelProps) {
  const { label, showAsterisk } = props;

  const show = showAsterisk ? "asteriskTrue" : "asteriskFalse";
  const className = `arkynAudioUploadLabel ${show}`;

  return <strong className={className.trim()}>{label}</strong>;
}

export { AudioUploadLabel };
