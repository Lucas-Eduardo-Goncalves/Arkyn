import {
  Button,
  FormController,
  FormError,
  FormLabel,
  Input,
} from "@arkyn/components";
import { Form, useNavigation } from "@remix-run/react";

import { Container } from "./styles";

function View() {
  const { state } = useNavigation();

  return (
    <Container>
      <h1>Sign In</h1>

      <Form method="POST">
        <FormController>
          <FormLabel showAsterisk>Hello, i love macarrão</FormLabel>
          <Input type="text" name="mail" placeholder="Mail" />
          <FormError />
        </FormController>
        <FormController>
          <Input type="password" name="password" placeholder="Password" />
          <FormError />
        </FormController>
        <Button isLoading={state === "submitting"}>Sign</Button>
      </Form>
    </Container>
  );
}

export { View };
