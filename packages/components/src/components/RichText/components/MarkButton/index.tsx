import { LucideIcon } from "lucide-react";
import { MouseEvent } from "react";
import { useSlate } from "slate-react";

import { MarkFormatType } from "../../defineType";
import { toggleMark } from "../../functions/toggleMark";
import { isMarkActive } from "../../helpers/isMarkActive";

import "./styles.css";

type MarkButtonProps = {
  format: MarkFormatType;
  icon: LucideIcon;
};

function MarkButton({ format, icon: Icon }: MarkButtonProps) {
  const editor = useSlate();

  const isActive = isMarkActive(editor, format);
  const activeClass = isActive ? "activeTrue" : "activeFalse";

  function handleMouseDown(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    toggleMark(editor, format);
  }

  return (
    <button
      type="button"
      className={"arkynRichTextMarkButton " + activeClass}
      onMouseDown={handleMouseDown}
    >
      <Icon />
    </button>
  );
}

export { MarkButton };
