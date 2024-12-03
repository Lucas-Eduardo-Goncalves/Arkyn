import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Image } from "lucide-react";
import { useState } from "react";
import { useSlate } from "slate-react";
import { Button } from "../../../Button";
import { FormController, FormLabel } from "../../../Form";
import { ImageUpload } from "../../../ImageUpload";
import { Input } from "../../../Input";
import { ModalContainer, ModalFooter, ModalHeader } from "../../../Modal";
import { TabButton, TabContainer } from "../../../Tabs";
import "./styles.css";
function InsertImage(props) {
    const { action, tabLabels = ["Adicionar URL", "Upload de arquivo"], modalCancelButton = "Cancelar", modalConfirmButton = "Confirmar", modalInputImageLabel = "Imagem:", modalInputUrlLabel = "URL da imagem:", modalTitle = "Inserir imagem", } = props;
    const editor = useSlate();
    const [modalIsVisibled, setModalIsVisibled] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [uploadType, setUploadType] = useState("url");
    function handleMouseDown(event) {
        event.preventDefault();
        if (!imageURL || imageURL === "")
            return;
        editor.insertNodes([
            { type: "paragraph", children: [{ text: "" }] },
            { type: "image", src: imageURL, children: [{ text: "" }] },
            { type: "paragraph", children: [{ text: "" }] },
        ]);
        setModalIsVisibled(false);
    }
    return (_jsxs(_Fragment, { children: [_jsx("button", { type: "button", className: "arkynRichTextInsertImage", onMouseDown: () => setModalIsVisibled(true), children: _jsx(Image, {}) }), _jsxs(ModalContainer, { isVisibled: modalIsVisibled, makeInvisible: () => setModalIsVisibled(false), children: [_jsx(ModalHeader, { children: modalTitle }), _jsxs("div", { className: "arkynRichTextInsertImageModalContent", children: [_jsxs(TabContainer, { defaultActive: uploadType, onClick: setUploadType, children: [_jsx(TabButton, { value: "url", children: tabLabels[0] }), _jsx(TabButton, { value: "file", children: tabLabels[1] })] }), uploadType === "url" && (_jsxs(_Fragment, { children: [_jsxs(FormController, { children: [_jsx(FormLabel, { children: modalInputUrlLabel }), _jsx(Input, { type: "text", name: "richTextimageURL", defaultValue: imageURL, onChange: (e) => setImageURL(e.target.value) })] }), imageURL && (_jsx("img", { className: "arkynRichTextInsertImageModalPreviewImage", src: imageURL, alt: "preview" }))] })), uploadType === "file" && (_jsxs(FormController, { children: [_jsx(FormLabel, { children: modalInputImageLabel }), _jsx(ImageUpload, { name: "richTextimageURL", action: action, defaultValue: imageURL, onUpload: (url) => setImageURL(url || "") })] }))] }), _jsxs(ModalFooter, { children: [_jsx(Button, { type: "button", scheme: "danger", variant: "outline", onClick: () => setModalIsVisibled(false), children: modalCancelButton }), _jsx(Button, { type: "button", onClick: handleMouseDown, children: modalConfirmButton })] })] })] }));
}
export { InsertImage };
