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
import { createEditor, Descendant, Transforms } from "slate";
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

import { useFormController } from "../Form/FormController";
import "./styles.css";

import { getSlateFromHtml } from "./functions/deserialize";
import { extractText } from "./functions/extractText";
import { getHtmlFromSlate } from "./functions/serialize";
import { isHtml } from "./functions/isHtml";

type RichTextProps = {
  name: string;
  maxLimit?: number;
  enforceCharacterLimit?: boolean;
  defaultValue?: string;
  isError?: boolean;
  onChangeCharactersCount?: (e: number) => void;
  onChange?: (value: Descendant[]) => void;
  onValueChange?: (value: string) => void;
};

function RichText({
  name,
  defaultValue,
  enforceCharacterLimit = false,
  onChangeCharactersCount,
  maxLimit = 2000,
  onValueChange,
  onChange,
  isError: baseIsError,
}: RichTextProps) {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const { id, inputRef, error } = useFormController();

  const baseRef = useRef<HTMLInputElement>(null);

  const defaultNodes = isHtml(defaultValue)
    ? getSlateFromHtml(defaultValue)
    : INITIAL_VALUE;

  const textFromNodes = extractText(defaultNodes);

  const [charactersCount, setCharactersCount] = useState(textFromNodes.length);
  const [inputValue, setInputValue] = useState(
    isHtml(defaultValue) ? defaultValue : ""
  );

  const [onFocus, setOnFocus] = useState(false);

  const ref = inputRef || baseRef;
  const isError = baseIsError || !!error;

  const renderLeaf = useCallback(Leaf, []);
  const renderElement = useCallback(Element, []);

  function handleChange(value: Descendant[]) {
    const text = extractText(value);

    setCharactersCount(text.length);
    onChangeCharactersCount && onChangeCharactersCount(text.length);

    if (enforceCharacterLimit && text.length >= maxLimit) {
      return;
    } else {
      setInputValue(getHtmlFromSlate(editor));

      onChange && onChange(value);
      onValueChange && onValueChange(getHtmlFromSlate(editor));

      editor.children = value;
      Transforms.setNodes(editor, { children: value });
    }
  }

  const focusClass = onFocus ? "focusTrue" : "focusFalse";
  const errorClass = isError
    ? "errorTrue"
    : maxLimit < charactersCount
    ? "errorTrue"
    : "errorFalse";

  const className = `arkynRichText ${errorClass} ${focusClass}`;

  const restatesCharacters = maxLimit - charactersCount;

  return (
    <Slate
      editor={editor}
      initialValue={defaultNodes}
      onChange={handleChange}
      onValueChange={handleChange}
    >
      <div className={className}>
        <Toolbar>
          <BlockButton format="headingOne" icon={Heading1} />
          <BlockButton format="headingTwo" icon={Heading2} />
          <BlockButton format="blockQuote" icon={Quote} />

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

        {restatesCharacters < 0 && (
          <div className="restatesCharacters">{restatesCharacters}</div>
        )}
      </div>

      <input ref={ref} type="hidden" name={name} value={inputValue} />
      <input type="hidden" name={`${name}Count`} value={charactersCount} />
    </Slate>
  );
}

export { RichText };
