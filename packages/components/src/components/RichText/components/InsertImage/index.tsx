import {
  Button,
  FormController,
  FormLabel,
  ImageUpload,
  Input,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  TabButton,
  TabContainer,
} from "@arkyn/components";
import { RichTextInsertImageProps } from "@arkyn/types";
import { Image } from "lucide-react";
import { MouseEvent, useState } from "react";
import { useSlate } from "slate-react";

import "./styles.css";

function InsertImage(props: RichTextInsertImageProps) {
  const {
    action,
    tabLabels = ["Adicionar URL", "Upload de arquivo"],
    modalCancelButton = "Cancelar",
    modalConfirmButton = "Confirmar",
    modalInputImageLabel = "Imagem:",
    modalInputUrlLabel = "URL da imagem:",
    modalTitle = "Inserir imagem",
  } = props;

  const editor = useSlate();

  const [modalIsVisibled, setModalIsVisibled] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [uploadType, setUploadType] = useState("url");

  function handleMouseDown(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!imageURL || imageURL === "") return;

    editor.insertNodes([
      { type: "paragraph", children: [{ text: "" }] },
      { type: "image", src: imageURL, children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "" }] },
    ]);

    setModalIsVisibled(false);
  }

  return (
    <>
      <button
        type="button"
        className="arkynRichTextInsertImage"
        onMouseDown={() => setModalIsVisibled(true)}
      >
        <Image />
      </button>

      <ModalContainer
        isVisibled={modalIsVisibled}
        makeInvisible={() => setModalIsVisibled(false)}
      >
        <ModalHeader>{modalTitle}</ModalHeader>

        <div className="arkynRichTextInsertImageModalContent">
          <TabContainer defaultActive={uploadType} onClick={setUploadType}>
            <TabButton value="url">{tabLabels[0]}</TabButton>
            <TabButton value="file">{tabLabels[1]}</TabButton>
          </TabContainer>

          {uploadType === "url" && (
            <>
              <FormController>
                <FormLabel>{modalInputUrlLabel}</FormLabel>
                <Input
                  type="text"
                  name="richTextimageURL"
                  defaultValue={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                />
              </FormController>

              {imageURL && (
                <img
                  className="arkynRichTextInsertImageModalPreviewImage"
                  src={imageURL}
                  alt="preview"
                />
              )}
            </>
          )}

          {uploadType === "file" && (
            <FormController>
              <FormLabel>{modalInputImageLabel}</FormLabel>
              <ImageUpload
                name="richTextimageURL"
                action={action}
                defaultValue={imageURL}
                onUpload={(url) => setImageURL(url || "")}
              />
            </FormController>
          )}
        </div>

        <ModalFooter>
          <Button
            type="button"
            scheme="danger"
            variant="outline"
            onClick={() => setModalIsVisibled(false)}
          >
            {modalCancelButton}
          </Button>

          <Button type="button" onClick={handleMouseDown}>
            {modalConfirmButton}
          </Button>
        </ModalFooter>
      </ModalContainer>
    </>
  );
}

export { InsertImage };
