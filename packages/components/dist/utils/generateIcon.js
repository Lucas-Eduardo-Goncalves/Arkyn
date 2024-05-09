import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
function GenerateIcon(iconSize, Icon) {
    if (!Icon)
        return _jsx(_Fragment, {});
    return _jsx(Icon, { size: iconSize, strokeWidth: 2.5 });
}
export { GenerateIcon };
