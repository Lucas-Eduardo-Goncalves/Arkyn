import { Button } from "@arkyn/components";
import { CircleDashed } from "lucide-react";
import { Box } from "~/components/Box";

export default function () {
  return (
    <main className="sub-main">
      <Box>
        <Button size="lg" leftIcon={CircleDashed}>
          Hello Word
        </Button>
        <Button size="md" leftIcon={CircleDashed}>
          Hello Word
        </Button>
        <Button size="sm" leftIcon={CircleDashed}>
          Hello Word
        </Button>
        <Button size="xs" leftIcon={CircleDashed}>
          Hello Word
        </Button>
      </Box>

      <Box>
        <Button size="lg" disabled leftIcon={CircleDashed}>
          Hello Word
        </Button>
        <Button size="md" disabled leftIcon={CircleDashed}>
          Hello Word
        </Button>
        <Button size="sm" disabled leftIcon={CircleDashed}>
          Hello Word
        </Button>
        <Button size="xs" disabled leftIcon={CircleDashed}>
          Hello Word
        </Button>
      </Box>

      <Box>
        <Button size="lg" isLoading leftIcon={CircleDashed}>
          Hello Word
        </Button>
        <Button size="md" isLoading leftIcon={CircleDashed}>
          Hello Word
        </Button>
        <Button size="sm" isLoading leftIcon={CircleDashed}>
          Hello Word
        </Button>
        <Button size="xs" isLoading leftIcon={CircleDashed}>
          Hello Word
        </Button>
      </Box>
    </main>
  );
}
