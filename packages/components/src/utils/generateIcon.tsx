import { LucideIcon } from "lucide-react";

function GenerateIcon(iconSize: number, Icon?: LucideIcon) {
  if (!Icon) return <></>;
  return <Icon size={iconSize} strokeWidth={2.5} />;
}

export { GenerateIcon };
