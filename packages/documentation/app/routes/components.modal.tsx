import { Button, Modal } from "@arkyn/components";
import { useState } from "react";

export default () => {
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
        Um conteudo muito grande, mt mt mt grande
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Modal.Footer>
          <Button scheme="danger" variant="outline" onClick={handleCloseModal}>
            Close Modal
          </Button>
          <Button>Confirmar</Button>
        </Modal.Footer>
      </Modal.Container>
    </>
  );
};
