import type { CpfCnpjInputProps } from "@arkyn/types";
import { Loader2 } from "lucide-react";

import { morpheme } from "../utils/morpheme";
import { MAX_LENGTH, TYPES, applyMask, clear, getMask } from "./utils";

function getConfig(props: CpfCnpjInputProps, isFocused: boolean) {
  const {
    isLoading,
    isError,
    size = "md",
    className: baseClassName = "",
    variant = "solid",
    prefix: basePrefix,
    sufix: baseSufix,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    disabled,
    defaultValue,
    readOnly,
    onFocus,
    onBlur,
    title,
    style,
    onChange,
    ...rest
  } = props;

  function parseDefault(event: string) {
    let value = clear(event);
    const mask = getMask(value);

    let nextLength = value.length;

    if (nextLength > MAX_LENGTH) return;
    value = applyMask(value, TYPES[mask] as "CPF" | "CNPJ");

    return value;
  }

  const loadingPosition = RightIcon ? "right" : "left";

  const hasPrefix = !!basePrefix ? "hasPrefix" : "";
  const hasSufix = !!baseSufix ? "hasSufix" : "";
  const errored = isError ? "errored" : "";
  const opacity = disabled || readOnly || isLoading ? "opacity" : "";
  const focused = isFocused ? "focused" : "";

  const className = `arkyn_input ${hasPrefix} ${hasSufix} ${variant} ${size} ${opacity} ${errored} ${focused} ${baseClassName}`;
  const iconSizes = { md: 20, lg: 20 };
  const iconSize = iconSizes[size];

  return {
    isLoading,
    className,
    prefix: morpheme(basePrefix, iconSize, "prefix"),
    sufix: morpheme(baseSufix, iconSize, "sufix"),
    LeftIcon,
    RightIcon,
    defaultValue: parseDefault(defaultValue || ""),
    disabled,
    readOnly,
    onFocus,
    onBlur,
    title,
    style,
    onChange,
    loadingPosition,
    iconSize: iconSize,
    Spinner: <Loader2 className="spinner" size={iconSize} strokeWidth={2.5} />,
    ...rest,
  };
}

export { getConfig };
