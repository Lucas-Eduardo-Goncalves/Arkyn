import { Button } from "@arkyn/components";
import { ButtonDTO } from "@arkyn/types";

import { Box } from "./Box";

type ButtonSizesProps = ButtonDTO["size"][];

type GenerateButtonListProps = {
  scheme: ButtonDTO["scheme"];
  variant: ButtonDTO["variant"];
};

function GenerateButtonList(props: GenerateButtonListProps) {
  const buttonSizes: ButtonSizesProps = ["lg", "md", "sm", "xs"];

  return (
    <main className="sub-main">
      <Box>
        {buttonSizes.map((size) => (
          <Button key={size} size={size} {...props}>
            Hello Word
          </Button>
        ))}
      </Box>
      <Box>
        {buttonSizes.map((size) => (
          <Button key={size} disabled size={size} {...props}>
            Hello Word
          </Button>
        ))}
      </Box>
      <Box>
        {buttonSizes.map((size) => (
          <Button key={size} isLoading size={size} {...props}>
            Hello Word
          </Button>
        ))}
      </Box>
    </main>
  );
}

export { GenerateButtonList };
