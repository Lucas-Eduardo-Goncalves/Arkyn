import type { ModalContainerProps } from "@arkyn/types";
import * as React from "react";
import "./styles.css";
type ModalContext = {
    makeInvisible: () => void;
};
declare const modalContext: React.Context<ModalContext>;
declare function Container(args: ModalContainerProps): React.JSX.Element;
export { Container, modalContext };
//# sourceMappingURL=index.d.ts.map