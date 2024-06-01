import { Fence, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">How to use</Title>

      <Fence language="js" type="typescript">
        {`import { regex } from "@arkyn/shared";
import { z } from "zod";

function someFunction() {
  // In the example we will use zod

  const formData = { phone: "(99) 99999-9999" };
  const schema = z.object({ phone: z.string().regex(regex.PHONE, "Invalid phone") })

  return schema.parse(formData);
}`}
      </Fence>
    </>
  );
}

export { Use };
