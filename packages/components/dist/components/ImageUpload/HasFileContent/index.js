import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, IconButton, Tooltip } from "@arkyn/components";
import { RefreshCw } from "lucide-react";
import "./styles.css";
function HasFileContent(props) {
    const { filePath, isLoading, acceptImage, changeImageButtonText, handleSelectFile, reSendImage, } = props;
    function handleClick() {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = acceptImage;
        input.onchange = (event) => {
            const file = event.target.files?.[0];
            if (file)
                handleSelectFile(file);
        };
        input.click();
    }
    return (_jsxs("div", { className: "arkynImageUploadHasFileContent", style: { backgroundImage: `url("${filePath}")` }, children: [reSendImage && (_jsx(Tooltip, { orientation: "bottom", text: "Reenviar imagem", children: _jsx(IconButton, { type: "button", "aria-label": "resend image", variant: "outline", scheme: "danger", size: "sm", isLoading: isLoading, onClick: reSendImage, icon: RefreshCw }) })), _jsx(Button, { isLoading: isLoading, onClick: handleClick, variant: "outline", size: "sm", type: "button", children: changeImageButtonText })] }));
}
export { HasFileContent };
