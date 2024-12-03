import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../Button";
import "./styles.css";
function NoFileContent(props) {
    const { dropImageText, isLoading, acceptImage, handleSelectFile, selectImageButtonText, } = props;
    function handleDrop(event) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file)
            handleSelectFile(file);
    }
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
    return (_jsxs("div", { onDrop: handleDrop, className: "arkynImageUploadNoFileContent", children: [_jsx(Button, { isLoading: isLoading, onClick: handleClick, variant: "ghost", size: "sm", type: "button", children: selectImageButtonText }), _jsx("p", { children: dropImageText })] }));
}
export { NoFileContent };
