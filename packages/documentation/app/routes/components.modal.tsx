import { Button, Modal } from "@arkyn/components";
import { useState } from "react";

export default function ModalRoute() {
  const [isVisibled, setIsVisibled] = useState(false);

  const handleOpenModal = () => setIsVisibled(true);
  const handleCloseModal = () => setIsVisibled(false);

  return (
    <>
      <h4>Modal</h4>
      <div>
        <Button onClick={handleOpenModal}>Open Modal</Button>
      </div>

      <Modal.Container isVisibled={isVisibled} makeInvisible={handleCloseModal}>
        <Modal.Header>Titulo</Modal.Header>

        <div style={{ padding: "16px 32px" }}>Conteúdo do modal</div>

        <Modal.Footer>
          <Button scheme="danger" variant="outline" onClick={handleCloseModal}>
            Close Modal
          </Button>
          <Button>Confirmar</Button>
        </Modal.Footer>
      </Modal.Container>
    </>
  );
}
