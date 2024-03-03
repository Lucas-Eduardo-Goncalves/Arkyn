import { Input } from "@arkyn/components";
import { InputDTO } from "@arkyn/types";

import { Box } from "./Box";
import { CircleDashed } from "lucide-react";

type GenerateIconListProps = {
  variant: InputDTO["variant"];
};

function GenerateIconList({ variant }: GenerateIconListProps) {
  return (
    <main className="sub-main">
      <Box>
        <Input
          title="Normal Input"
          variant={variant}
          size="lg"
          leftIcon={CircleDashed}
        />
        <Input
          title="Normal Input"
          variant={variant}
          size="md"
          leftIcon={CircleDashed}
        />
      </Box>
      <Box>
        <Input
          title="Loading Input"
          isLoading
          variant={variant}
          size="lg"
          leftIcon={CircleDashed}
        />
        <Input
          title="Loading Input"
          isLoading
          variant={variant}
          size="md"
          leftIcon={CircleDashed}
        />
      </Box>
      <Box>
        <Input
          title="Error Input"
          inError
          variant={variant}
          size="lg"
          leftIcon={CircleDashed}
        />
        <Input
          title="Error Input"
          inError
          variant={variant}
          size="md"
          leftIcon={CircleDashed}
        />
      </Box>
      <Box>
        <Input
          title="Disabled Input"
          disabled
          variant={variant}
          size="lg"
          leftIcon={CircleDashed}
        />
        <Input
          title="Disabled Input"
          disabled
          variant={variant}
          size="md"
          leftIcon={CircleDashed}
        />
      </Box>
    </main>
  );
}

export { GenerateIconList };
