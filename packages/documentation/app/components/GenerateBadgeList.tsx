import { Badge } from "@arkyn/components";
import { BadgeDTO } from "@arkyn/types";
import { CircleDashed } from "lucide-react";

import { Box } from "./Box";

const schemes: BadgeDTO["scheme"][] = [
  "primary",
  "secondary",
  "info",
  "danger",
  "success",
  "warning",
];

type GenerateBadgeListProps = {
  variant: BadgeDTO["variant"];
};

function GenerateBadgeList(props: GenerateBadgeListProps) {
  return (
    <main className="sub-main">
      {schemes.map((scheme) => (
        <Box key={scheme}>
          <Box>
            <Badge
              size="lg"
              variant={props.variant}
              scheme={scheme}
              leftIcon={CircleDashed}
            >
              Text
            </Badge>
            <Badge size="lg" variant={props.variant} scheme={scheme}>
              Text
            </Badge>
          </Box>

          <Box>
            <Badge
              variant={props.variant}
              scheme={scheme}
              leftIcon={CircleDashed}
            >
              Text
            </Badge>
            <Badge variant={props.variant} scheme={scheme}>
              Text
            </Badge>
          </Box>
        </Box>
      ))}
    </main>
  );
}

export { GenerateBadgeList };
