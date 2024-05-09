/// <reference types="react" />
import type { ModalContainerProps } from "@arkyn/types";
import "./styles.css";
type ModalContext = {
    makeInvisible: () => void;
};
declare const modalContext: import("react").Context<ModalContext>;
declare function Container(args: ModalContainerProps): import("react/jsx-runtime").JSX.Element;
export { Container, modalContext };
//# sourceMappingURL=index.d.ts.map