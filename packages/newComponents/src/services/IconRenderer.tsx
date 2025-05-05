import { LucideIcon } from "lucide-react";

type IconRendererProps = {
  iconSize: number;
  Icon?: LucideIcon;
};

function IconRenderer(props: IconRendererProps) {
  const { iconSize, Icon } = props;

  if (!Icon) return <></>;
  return <Icon size={iconSize} strokeWidth={2.5} />;
}

export { IconRenderer };
