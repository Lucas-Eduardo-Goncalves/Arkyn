import type { FormLabelProps } from "@arkyn/types";

type BuildFormLabelConfigProps = FormLabelProps;

function buildFormLabelConfig(args: BuildFormLabelConfigProps) {
  const { showAsterisk = false, className: baseClassName = "", ...rest } = args;

  const show = showAsterisk ? "show-asterisk" : "";
  const className = `arkyn_form_label ${show} ${baseClassName}`;

  return {
    className: className.trim(),
    ...rest,
  };
}

export { buildFormLabelConfig };
