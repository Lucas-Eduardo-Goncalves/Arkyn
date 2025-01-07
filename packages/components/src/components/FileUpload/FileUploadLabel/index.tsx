import { FileUploadLabelProps } from "@arkyn/types";
import "./styles.css";

function FileUploadLabel(props: FileUploadLabelProps) {
  const { label, showAsterisk } = props;

  const show = showAsterisk ? "asteriskTrue" : "asteriskFalse";
  const className = `arkynFileUploadLabel ${show}`;

  return <strong className={className.trim()}>{label}</strong>;
}

export { FileUploadLabel };
