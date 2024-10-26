import type { SelectProps } from "@arkyn/types";
import type { FocusEvent } from "react";

import { Check, ChevronDown, Search } from "lucide-react";
import { useRef, useState } from "react";

import { getConfig } from "./getConfig";

import { useFormController } from "../../components/Form/FormController";
import { Input } from "../Input";
import "./styles.css";

function Select(props: SelectProps) {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { inputRef, id, error } = useFormController();

  const baseRef = useRef<HTMLInputElement>(null);

  const ref = inputRef || baseRef;
  const isError = props.isError || !!error;

  const {
    disabled,
    title,
    style,
    className,
    prefix,
    iconSize,
    isLoading,
    LeftIcon,
    value: baseValue = null,
    defaultValue = "",
    onFocus,
    onBlur,
    Spinner,
    name,
    placeholder,
    onSelect,
    options,
    optionMaxHeight,
    closeOnSelect,
    isSearchable,
    onSearch,
    ...rest
  } = getConfig({ ...props, id, isError }, isFocused);

  const [selectedValue, setSelectedValue] = useState(defaultValue);

  function handleSectionClick() {
    if (disabled || !ref?.current || isFocused) return;
    setIsFocused(true);
    ref.current.focus();
  }

  function handleFocus(e: FocusEvent<HTMLInputElement>) {
    if (isFocused) return;
    setIsFocused(true);
    if (onFocus) onFocus(e);
  }

  function handleBlur() {
    setIsFocused(false);
    if (onBlur && ref.current) ref.current.blur();
  }

  function handleChangeValue(option: { label: string; value: string }) {
    const { label, value } = option;

    if (selectedValue !== value) setSelectedValue(value);
    else setSelectedValue("");

    if (onSelect) onSelect({ label, value });
    if (closeOnSelect) handleBlur();
  }

  const currentValue =
    typeof baseValue === "string" ? baseValue : selectedValue;

  const currentLabel =
    options.find((option) => option.value === currentValue)?.label || "";

  const placeholderDark = () => {
    if (!isFocused && !!currentLabel) return true;
    if (!isFocused && !currentLabel) return false;
    if (isFocused && !!currentLabel) return true;
    if (isFocused && !currentLabel) return false;
  };

  return (
    <>
      <section
        title={title}
        style={style}
        onClick={handleSectionClick}
        className={`${className} placeholder_dark_${placeholderDark()}`}
      >
        {prefix}
        {LeftIcon && <LeftIcon size={iconSize} strokeWidth={2.5} />}

        <input
          disabled={disabled}
          readOnly
          placeholder={currentLabel || placeholder}
          onFocus={handleFocus}
          {...rest}
        />

        <input
          type="hidden"
          ref={ref}
          name={name}
          value={currentValue || ""}
          readOnly
        />

        {isFocused && (
          <div
            className="arkyn_select_content"
            style={{ overflow: "auto", maxHeight: optionMaxHeight }}
          >
            {isSearchable && (
              <Input
                type="search"
                name="search-select"
                variant="underline"
                leftIcon={Search}
                onChange={(e) => setSearch(e.target.value)}
              />
            )}

            {options
              .filter((option) => {
                if (props.onSearch) return true;
                if (!props.isSearchable) return true;
                if (option.label.toLowerCase().includes(search.toLowerCase()))
                  return true;
                return false;
              })
              .map(({ label, value }) => (
                <div
                  key={value}
                  onClick={() => handleChangeValue({ label, value })}
                  className={
                    currentValue === value
                      ? "arkyn_select_option active"
                      : "arkyn_select_option"
                  }
                >
                  {label} <Check />
                </div>
              ))}

            {options.length <= 0 && <p>Sem opções disponíveis</p>}
          </div>
        )}

        {!isLoading && (
          <ChevronDown
            className="arkyn_select_arrow"
            size={iconSize}
            strokeWidth={2.5}
          />
        )}
        {isLoading && Spinner}
      </section>

      {isFocused && (
        <aside className="arkyn_select_overlay" onClick={handleBlur} />
      )}
    </>
  );
}

export { Select };
