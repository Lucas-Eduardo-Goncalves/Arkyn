import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { File, FileArchive, FileAudio, FileImage, RefreshCw, } from "lucide-react";
import { Button } from "../../Button";
import { Divider } from "../../Divider";
import { IconButton } from "../../IconButton";
import { Tooltip } from "../../Tooltip";
import "./styles.css";
function HasFileContent(props) {
    const { disabled, file, isLoading, acceptFile, changeFileButtonText, handleSelectFile, reSendFile, } = props;
    function handleClick() {
        if (disabled)
            return;
        const input = document.createElement("input");
        input.type = "file";
        input.accept = acceptFile;
        input.onchange = (event) => {
            const file = event.target.files?.[0];
            if (file)
                handleSelectFile(file);
        };
        input.click();
    }
    function FileIcon() {
        if (file.type.startsWith("image/"))
            return _jsx(FileImage, {});
        if (file.type.startsWith("audio/"))
            return _jsx(FileAudio, {});
        if (file.type.startsWith("application/zip"))
            return _jsx(FileArchive, {});
        return _jsx(File, {});
    }
    return (_jsxs("div", { className: "arkynFileUploadHasFileContent", children: [_jsxs("section", { className: "arkynFileUploadFileContainer", children: [_jsx(FileIcon, {}), _jsx("p", { children: file.name })] }), _jsx(Divider, {}), _jsxs("div", { className: "arkynFileUploadButtonsContainer", children: [!!reSendFile && (_jsx(Tooltip, { orientation: "bottom", text: "Reenviar arquivo", children: _jsx(IconButton, { type: "button", "aria-label": "resend file", variant: "outline", scheme: "danger", size: "sm", isLoading: isLoading, onClick: reSendFile, icon: RefreshCw, disabled: disabled }) })), _jsx(Button, { isLoading: isLoading, onClick: handleClick, variant: "outline", size: "sm", type: "button", disabled: disabled, children: changeFileButtonText })] })] }));
}
export { HasFileContent };
