import type { LucideProps } from "lucide-react";
import type { HTMLAttributes } from "react";

type AlertContainerProps = {
  schema: "success" | "danger" | "warning" | "info";
} & HTMLAttributes<HTMLDivElement>;

type AlertContentProps = HTMLAttributes<HTMLDivElement>;

type AlertDescriptionProps = HTMLAttributes<HTMLDivElement>;

type AlertIconProps = LucideProps;

type AlertTitleProps = HTMLAttributes<HTMLDivElement>;

export type {
  AlertContainerProps,
  AlertContentProps,
  AlertDescriptionProps,
  AlertIconProps,
  AlertTitleProps,
};
