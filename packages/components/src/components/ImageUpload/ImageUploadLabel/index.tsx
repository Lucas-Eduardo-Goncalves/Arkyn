import { ImageUploadLabelProps } from "@arkyn/types";
import "./styles.css";

function ImageUploadLabel(props: ImageUploadLabelProps) {
  const { label, showAsterisk } = props;

  const show = showAsterisk ? "asteriskTrue" : "asteriskFalse";
  const className = `arkynImageUploadLabel ${show}`;

  return <strong className={className.trim()}>{label}</strong>;
}

export { ImageUploadLabel };
