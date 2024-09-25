import { LucideIcon } from "lucide-react";
import { MouseEvent } from "react";
import { useSlate } from "slate-react";

import { AlignFormatType, ElementFormatType } from "../../defineType";
import { toggleBlock } from "../../functions/toggleBlock";
import { isBlockActive } from "../../helpers/isBlockActive";
import { TEXT_ALIGN_TYPES } from "../../template/TEXT_ALIGN_TYPES";

import "./styles.css";

type BlockButtonProps = {
  format: ElementFormatType | AlignFormatType;
  icon: LucideIcon;
};

function BlockButton({ format, icon: Icon }: BlockButtonProps) {
  const editor = useSlate();

  const blockType = TEXT_ALIGN_TYPES.includes(format) ? "align" : "type";
  const isActive = isBlockActive(editor, format, blockType);

  const activeClass = isActive ? "activeTrue" : "activeFalse";

  function handleMouseDown(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    toggleBlock(editor, format);
  }

  return (
    <button
      type="button"
      className={"arkynRichTextBlockButton " + activeClass}
      onMouseDown={handleMouseDown}
    >
      <Icon />
    </button>
  );
}

export { BlockButton };
