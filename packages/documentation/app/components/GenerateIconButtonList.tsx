import { IconButton } from "@arkyn/components";
import { IconButtonDTO } from "@arkyn/types";

import { Box } from "./Box";
import { CircleDashed } from "lucide-react";

type ButtonSizesProps = IconButtonDTO["size"][];

type GenerateButtonListProps = {
  scheme: IconButtonDTO["scheme"];
  variant: IconButtonDTO["variant"];
};

function GenerateIconButtonList(props: GenerateButtonListProps) {
  const buttonSizes: ButtonSizesProps = ["lg", "md", "sm", "xs"];

  return (
    <main className="sub-main">
      <Box>
        {buttonSizes.map((size) => (
          <IconButton
            key={size}
            size={size}
            title="Normal Button"
            aria-label="example-button"
            icon={CircleDashed}
            {...props}
          />
        ))}
      </Box>
      <Box>
        {buttonSizes.map((size) => (
          <IconButton
            key={size}
            size={size}
            disabled
            title="Disabled Button"
            aria-label="example-disabled-button"
            icon={CircleDashed}
            {...props}
          />
        ))}
      </Box>
      <Box>
        {buttonSizes.map((size) => (
          <IconButton
            key={size}
            size={size}
            isLoading
            title="Loading Button"
            aria-label="example-isLoading-button"
            icon={CircleDashed}
            {...props}
          />
        ))}
      </Box>
    </main>
  );
}

export { GenerateIconButtonList };
