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
