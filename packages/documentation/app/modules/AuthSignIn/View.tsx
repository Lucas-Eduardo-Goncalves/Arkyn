import { Form, useActionData, useNavigation } from "@remix-run/react";
import { Button, Input } from "@arkyn/components";

import { Container } from "./styles";
import { action } from "./functions/action";

function View() {
  const { state } = useNavigation();
  const actionData = useActionData<typeof action>();

  return (
    <Container>
      <h1>Sign In</h1>
      <p></p>

      <Form method="POST">
        <Input type="text" name="mail" placeholder="Mail" />
        <Input type="password" name="password" placeholder="Password" />
        <Button isLoading={state === "submitting"}>Sign</Button>
      </Form>
    </Container>
  );
}

export { View };
