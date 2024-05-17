import { Fence, Paragraph, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">How to use</Title>

      <Paragraph>
        If the function fails, it returns success <code>false</code>,
        fieldErrors <code>key: string</code> object with error field + error
        message, fields <code>key: any</code>, what was received received to be
        validated.
      </Paragraph>

      <Paragraph>
        If the function succeeds, success: true, data: data already validated
        will be returned.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { formParse } from "@arkyn/server";
import { z } from "zod";

import { api } from "~/services";       

async function someFunction() {
  const myObject = { name: "Lucas", age: 24 };

  const mySchema = z.object({
    name: z.string(),
    age: z.number(),
    lastName: z.string(),
  })

  const formParsed = formParse([myObject, mySchema]);
  if(!formParsed.success) return badRequest(formParsed); 

  await api.post("/users", formParsed.data);

  return null;
}

export { someFunction }; `}
      </Fence>
    </>
  );
}

export { Use };
