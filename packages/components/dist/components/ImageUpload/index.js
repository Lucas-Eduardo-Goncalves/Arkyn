import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFieldErrors } from "@arkyn/components";
import { useState } from "react";
import { HasFileContent } from "./HasFileContent";
import { ImageUploadError } from "./ImageUploadError";
import { ImageUploadLabel } from "./ImageUploadLabel";
import { NoFileContent } from "./NoFileContent";
import "./styles.css";
function ImageUpload(props) {
    const { name, defaultValue = "", label, showAsterisk = false, action, fileName = "file", method = "POST", acceptImage = "image/*", fileResponseName = "url", changeImageButtonText = "Alterar imagem", selectImageButtonText = "Selecionar imagem", dropImageText = "Ou arraste e solte a imagem aqui", onUpload, } = props;
    const fieldErrors = useFieldErrors();
    const fieldError = fieldErrors[name];
    const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState("");
    const [file, setFile] = useState(null);
    const [filePath, setFilePath] = useState(defaultValue);
    const [isLoading, setIsLoading] = useState(false);
    async function handleUploadImage(file) {
        setIsLoading(true);
        setFile(file);
        const formData = new FormData();
        formData.append(fileName, file);
        await fetch(action, { method: method, body: formData })
            .then(async (response) => await response.json())
            .then((response) => {
            if (!!response?.error)
                setError(response.error);
            else
                setValue(response?.[fileResponseName]);
            onUpload && onUpload(response?.[fileResponseName]);
        })
            .catch((error) => {
            console.error(error);
            setError("Erro ao enviar imagem");
        })
            .finally(() => setIsLoading(false));
    }
    function handleSelectFile(file) {
        setFilePath(URL.createObjectURL(file));
        handleUploadImage(file);
    }
    const errorMessage = fieldError || error;
    const hasErrorClassName = errorMessage ? "hasError" : "noHasError";
    const hasImageClassName = filePath ? "hasImage" : "noHasImage";
    const className = `arkynImageUpload ${hasErrorClassName} ${hasImageClassName}`;
    return (_jsxs("div", { className: "arkynImageUploadContainer", children: [label && _jsx(ImageUploadLabel, { label: label, showAsterisk: showAsterisk }), _jsxs("div", { className: className, children: [_jsx("input", { type: "hidden", name: name, value: value || "" }), !filePath && (_jsx(NoFileContent, { isLoading: isLoading, acceptImage: acceptImage, dropImageText: dropImageText, handleSelectFile: handleSelectFile, selectImageButtonText: selectImageButtonText })), filePath && (_jsx(HasFileContent, { isLoading: isLoading, acceptImage: acceptImage, filePath: filePath, handleSelectFile: handleSelectFile, changeImageButtonText: changeImageButtonText, reSendImage: !!errorMessage && file ? () => handleUploadImage(file) : undefined }))] }), errorMessage && _jsx(ImageUploadError, { error: errorMessage })] }));
}
export { ImageUpload };
