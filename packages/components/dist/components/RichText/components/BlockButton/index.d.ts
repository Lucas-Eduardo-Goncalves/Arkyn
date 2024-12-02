import { RichTextAlignFormatType, RichTextElementFormatType } from "@arkyn/types";
import { LucideIcon } from "lucide-react";
import "./styles.css";
type BlockButtonProps = {
    format: RichTextElementFormatType | RichTextAlignFormatType;
    icon: LucideIcon;
};
declare function BlockButton({ format, icon: Icon }: BlockButtonProps): import("react/jsx-runtime").JSX.Element;
export { BlockButton };
//# sourceMappingURL=index.d.ts.map