import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@arkyn/components";
import "./styles.css";
function NoFileContent(props) {
    const { dropFileText, isLoading, acceptFile, handleSelectFile, selectFileButtonText, disabled, } = props;
    function handleDrop(event) {
        if (disabled)
            return;
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file)
            handleSelectFile(file);
    }
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
    return (_jsxs("div", { onDrop: handleDrop, className: "arkynFileUploadNoFileContent", children: [_jsx(Button, { isLoading: isLoading, onClick: handleClick, variant: "ghost", size: "sm", type: "button", disabled: disabled, children: selectFileButtonText }), _jsx("p", { children: dropFileText })] }));
}
export { NoFileContent };