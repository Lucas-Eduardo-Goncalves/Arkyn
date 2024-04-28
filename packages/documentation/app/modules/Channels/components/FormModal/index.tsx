import {
  Button,
  FormController,
  FormError,
  FormLabel,
  Input,
  Modal,
} from "@arkyn/components";
import { Form, useNavigation } from "@remix-run/react";
import { Content } from "./styles";

type FormModalProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
};

function FormModal({ handleCloseModal, isOpen }: FormModalProps) {
  const { state } = useNavigation();

  return (
    <Modal.Container isVisibled={isOpen} makeInvisible={handleCloseModal}>
      <Modal.Header>Create new Channel</Modal.Header>

      <Form method="POST">
        <Content>
          <FormController>
            <FormLabel showAsterisk>Name</FormLabel>
            <Input autoComplete="name" name="name" type="text" />
            <FormError />
          </FormController>
        </Content>

        <Modal.Footer>
          <Button
            variant="outline"
            type="button"
            scheme="danger"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
          <Button
            isLoading={state === "submitting"}
            name="_action"
            value="create-channel"
          >
            Create
          </Button>
        </Modal.Footer>
      </Form>
    </Modal.Container>
  );
}

export { FormModal };
