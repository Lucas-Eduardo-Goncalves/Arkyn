import * as React from "react";
function GenerateIcon(iconSize, Icon) {
    if (!Icon)
        return React.createElement(React.Fragment, null);
    return React.createElement(Icon, { size: iconSize, strokeWidth: 2.5 });
}
export { GenerateIcon };
