import { Button, Modal } from "@arkyn/components";
import { Form, useNavigation } from "@remix-run/react";
import { Content } from "./styles";

type DeleteModalProps = {
  isOpen: boolean;
  id: string;
  handleCloseModal: () => void;
};

function DeleteModal({ handleCloseModal, id, isOpen }: DeleteModalProps) {
  const { state } = useNavigation();

  return (
    <Modal.Container isVisibled={isOpen} makeInvisible={handleCloseModal}>
      <Modal.Header>Delete Channel</Modal.Header>

      <Form method="POST">
        <Content>
          <p>Are you sure you want to delete this channel?</p>
          <input type="hidden" value={id} name="id" />
        </Content>

        <Modal.Footer>
          <Button variant="outline" type="button" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            isLoading={state === "submitting"}
            name="_action"
            value="delete-channel"
            scheme="danger"
          >
            Delete
          </Button>
        </Modal.Footer>
      </Form>
    </Modal.Container>
  );
}

export { DeleteModal };
