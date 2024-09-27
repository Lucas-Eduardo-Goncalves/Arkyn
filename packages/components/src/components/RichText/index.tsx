import isHotkey from "is-hotkey";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Italic,
  Quote,
  Underline,
} from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";
import { createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";

import { BlockButton } from "./components/BlockButton/intex";
import { Element } from "./components/Element";
import { Leaf } from "./components/Leaf";
import { MarkButton } from "./components/MarkButton";
import { Toolbar } from "./components/Toolbar";
import { toggleMark } from "./functions/toggleMark";
import { HOTKEYS } from "./template/HOTKEYS";
import { INITIAL_VALUE } from "./template/INITIAL_VALUE";

import "./styles.css";
import { useFormController } from "../Form/FormController";

type RichTextProps = {
  name: string;
  defaultValue?: string;
  isError?: boolean;
  onChange?: (value: Descendant[]) => void;
  onValueChange?: (value: string) => void;
};

function RichText({
  name,
  defaultValue,
  onValueChange,
  onChange,
  isError: baseIsError,
}: RichTextProps) {
  const [editorValue, setEditorValue] = useState<Descendant[]>(
    defaultValue ? JSON.parse(defaultValue) : INITIAL_VALUE
  );
  const [onFocus, setOnFocus] = useState(false);

  const { id, inputRef, error } = useFormController();

  const baseRef = useRef<HTMLInputElement>(null);

  const ref = inputRef || baseRef;
  const isError = baseIsError || !!error;

  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const renderLeaf = useCallback(Leaf, []);
  const renderElement = useCallback(Element, []);

  function handleChange(e: Descendant[]) {
    setEditorValue(e);
    onChange && onChange(e);
    onValueChange && onValueChange(JSON.stringify(e));
  }

  const errorClass = isError ? "errorTrue" : "errorFalse";
  const focusClass = onFocus ? "focusTrue" : "focusFalse";

  const className = `arkynRichText ${errorClass} ${focusClass}`;

  return (
    <Slate
      editor={editor}
      initialValue={defaultValue ? JSON.parse(defaultValue) : INITIAL_VALUE}
      onChange={handleChange}
      onValueChange={handleChange}
    >
      <div className={className}>
        <Toolbar>
          <BlockButton format="headingOne" icon={Heading1} />
          <BlockButton format="headingTwo" icon={Heading2} />
          <BlockButton format="blockQuote" icon={Quote} />
          {/* <BlockButton format="bulletedList" icon={ListVideo} /> */}
          {/* <BlockButton format="listItem" icon={List} /> */}
          {/* <BlockButton format="numberedList" icon={ListOrdered} /> */}

          <MarkButton format="bold" icon={Bold} />
          <MarkButton format="italic" icon={Italic} />
          <MarkButton format="underline" icon={Underline} />
          <MarkButton format="code" icon={Code} />

          <BlockButton format="left" icon={AlignLeft} />
          <BlockButton format="right" icon={AlignRight} />
          <BlockButton format="center" icon={AlignCenter} />
          <BlockButton format="justify" icon={AlignJustify} />
        </Toolbar>

        <Editable
          className="editorContainer"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          spellCheck
          id={id}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event as any)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey as keyof typeof HOTKEYS];
                toggleMark(editor, mark);
              }
            }
          }}
        />
      </div>

      <input
        ref={ref}
        type="hidden"
        name={name}
        value={JSON.stringify(editorValue)}
      />
    </Slate>
  );
}

export { RichText };
