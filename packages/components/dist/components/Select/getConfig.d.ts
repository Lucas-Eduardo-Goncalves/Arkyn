/// <reference types="react" />
/// <reference types="react" />
import type { SelectProps } from "@arkyn/types";
declare function getConfig(props: SelectProps, isFocused: boolean): {
    name: string;
    value?: string;
    defaultValue?: string;
    options: {
        label: string;
        value: string;
    }[];
    onSelect?: (value: {
        label: string;
        value: string;
    }) => void;
    suppressHydrationWarning?: boolean;
    color?: string;
    height?: string | number;
    id?: string;
    lang?: string;
    max?: string | number;
    min?: string | number;
    width?: string | number;
    role?: import("react").AriaRole;
    tabIndex?: number;
    "aria-activedescendant"?: string;
    "aria-atomic"?: boolean | "true" | "false";
    "aria-autocomplete"?: "list" | "none" | "inline" | "both";
    "aria-braillelabel"?: string;
    "aria-brailleroledescription"?: string;
    "aria-busy"?: boolean | "true" | "false";
    "aria-checked"?: boolean | "true" | "false" | "mixed";
    "aria-colcount"?: number;
    "aria-colindex"?: number;
    "aria-colindextext"?: string;
    "aria-colspan"?: number;
    "aria-controls"?: string;
    "aria-current"?: boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time";
    "aria-describedby"?: string;
    "aria-description"?: string;
    "aria-details"?: string;
    "aria-disabled"?: boolean | "true" | "false";
    "aria-dropeffect"?: "link" | "none" | "copy" | "execute" | "move" | "popup";
    "aria-errormessage"?: string;
    "aria-expanded"?: boolean | "true" | "false";
    "aria-flowto"?: string;
    "aria-grabbed"?: boolean | "true" | "false";
    "aria-haspopup"?: boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree";
    "aria-hidden"?: boolean | "true" | "false";
    "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling";
    "aria-keyshortcuts"?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-level"?: number;
    "aria-live"?: "off" | "assertive" | "polite";
    "aria-modal"?: boolean | "true" | "false";
    "aria-multiline"?: boolean | "true" | "false";
    "aria-multiselectable"?: boolean | "true" | "false";
    "aria-orientation"?: "horizontal" | "vertical";
    "aria-owns"?: string;
    "aria-placeholder"?: string;
    "aria-posinset"?: number;
    "aria-pressed"?: boolean | "true" | "false" | "mixed";
    "aria-readonly"?: boolean | "true" | "false";
    "aria-relevant"?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals";
    "aria-required"?: boolean | "true" | "false";
    "aria-roledescription"?: string;
    "aria-rowcount"?: number;
    "aria-rowindex"?: number;
    "aria-rowindextext"?: string;
    "aria-rowspan"?: number;
    "aria-selected"?: boolean | "true" | "false";
    "aria-setsize"?: number;
    "aria-sort"?: "none" | "ascending" | "descending" | "other";
    "aria-valuemax"?: number;
    "aria-valuemin"?: number;
    "aria-valuenow"?: number;
    "aria-valuetext"?: string;
    children?: import("react").ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    };
    onCopy?: import("react").ClipboardEventHandler<HTMLInputElement>;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLInputElement>;
    onCut?: import("react").ClipboardEventHandler<HTMLInputElement>;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLInputElement>;
    onPaste?: import("react").ClipboardEventHandler<HTMLInputElement>;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLInputElement>;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLInputElement>;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLInputElement>;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLInputElement>;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLInputElement>;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLInputElement>;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLInputElement>;
    onFocusCapture?: import("react").FocusEventHandler<HTMLInputElement>;
    onBlurCapture?: import("react").FocusEventHandler<HTMLInputElement>;
    onChangeCapture?: import("react").FormEventHandler<HTMLInputElement>;
    onBeforeInput?: import("react").FormEventHandler<HTMLInputElement>;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLInputElement>;
    onInput?: import("react").FormEventHandler<HTMLInputElement>;
    onInputCapture?: import("react").FormEventHandler<HTMLInputElement>;
    onReset?: import("react").FormEventHandler<HTMLInputElement>;
    onResetCapture?: import("react").FormEventHandler<HTMLInputElement>;
    onSubmit?: import("react").FormEventHandler<HTMLInputElement>;
    onSubmitCapture?: import("react").FormEventHandler<HTMLInputElement>;
    onInvalid?: import("react").FormEventHandler<HTMLInputElement>;
    onInvalidCapture?: import("react").FormEventHandler<HTMLInputElement>;
    onLoad?: import("react").ReactEventHandler<HTMLInputElement>;
    onLoadCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onError?: import("react").ReactEventHandler<HTMLInputElement>;
    onErrorCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLInputElement>;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLInputElement>;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLInputElement>;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLInputElement>;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLInputElement>;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLInputElement>;
    onAbort?: import("react").ReactEventHandler<HTMLInputElement>;
    onAbortCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onCanPlay?: import("react").ReactEventHandler<HTMLInputElement>;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLInputElement>;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onDurationChange?: import("react").ReactEventHandler<HTMLInputElement>;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onEmptied?: import("react").ReactEventHandler<HTMLInputElement>;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onEncrypted?: import("react").ReactEventHandler<HTMLInputElement>;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onEnded?: import("react").ReactEventHandler<HTMLInputElement>;
    onEndedCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onLoadedData?: import("react").ReactEventHandler<HTMLInputElement>;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLInputElement>;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onLoadStart?: import("react").ReactEventHandler<HTMLInputElement>;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onPause?: import("react").ReactEventHandler<HTMLInputElement>;
    onPauseCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onPlay?: import("react").ReactEventHandler<HTMLInputElement>;
    onPlayCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onPlaying?: import("react").ReactEventHandler<HTMLInputElement>;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onProgress?: import("react").ReactEventHandler<HTMLInputElement>;
    onProgressCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onRateChange?: import("react").ReactEventHandler<HTMLInputElement>;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onResize?: import("react").ReactEventHandler<HTMLInputElement>;
    onResizeCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onSeeked?: import("react").ReactEventHandler<HTMLInputElement>;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onSeeking?: import("react").ReactEventHandler<HTMLInputElement>;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onStalled?: import("react").ReactEventHandler<HTMLInputElement>;
    onStalledCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onSuspend?: import("react").ReactEventHandler<HTMLInputElement>;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLInputElement>;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onVolumeChange?: import("react").ReactEventHandler<HTMLInputElement>;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onWaiting?: import("react").ReactEventHandler<HTMLInputElement>;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onAuxClick?: import("react").MouseEventHandler<HTMLInputElement>;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLInputElement>;
    onClick?: import("react").MouseEventHandler<HTMLInputElement>;
    onClickCapture?: import("react").MouseEventHandler<HTMLInputElement>;
    onContextMenu?: import("react").MouseEventHandler<HTMLInputElement>;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLInputElement>;
    onDoubleClick?: import("react").MouseEventHandler<HTMLInputElement>;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLInputElement>;
    onDrag?: import("react").DragEventHandler<HTMLInputElement>;
    onDragCapture?: import("react").DragEventHandler<HTMLInputElement>;
    onDragEnd?: import("react").DragEventHandler<HTMLInputElement>;
    onDragEndCapture?: import("react").DragEventHandler<HTMLInputElement>;
    onDragEnter?: import("react").DragEventHandler<HTMLInputElement>;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLInputElement>;
    onDragExit?: import("react").DragEventHandler<HTMLInputElement>;
    onDragExitCapture?: import("react").DragEventHandler<HTMLInputElement>;
    onDragLeave?: import("react").DragEventHandler<HTMLInputElement>;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLInputElement>;
    onDragOver?: import("react").DragEventHandler<HTMLInputElement>;
    onDragOverCapture?: import("react").DragEventHandler<HTMLInputElement>;
    onDragStart?: import("react").DragEventHandler<HTMLInputElement>;
    onDragStartCapture?: import("react").DragEventHandler<HTMLInputElement>;
    onDrop?: import("react").DragEventHandler<HTMLInputElement>;
    onDropCapture?: import("react").DragEventHandler<HTMLInputElement>;
    onMouseDown?: import("react").MouseEventHandler<HTMLInputElement>;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLInputElement>;
    onMouseEnter?: import("react").MouseEventHandler<HTMLInputElement>;
    onMouseLeave?: import("react").MouseEventHandler<HTMLInputElement>;
    onMouseMove?: import("react").MouseEventHandler<HTMLInputElement>;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLInputElement>;
    onMouseOut?: import("react").MouseEventHandler<HTMLInputElement>;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLInputElement>;
    onMouseOver?: import("react").MouseEventHandler<HTMLInputElement>;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLInputElement>;
    onMouseUp?: import("react").MouseEventHandler<HTMLInputElement>;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLInputElement>;
    onSelectCapture?: import("react").ReactEventHandler<HTMLInputElement>;
    onTouchCancel?: import("react").TouchEventHandler<HTMLInputElement>;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLInputElement>;
    onTouchEnd?: import("react").TouchEventHandler<HTMLInputElement>;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLInputElement>;
    onTouchMove?: import("react").TouchEventHandler<HTMLInputElement>;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLInputElement>;
    onTouchStart?: import("react").TouchEventHandler<HTMLInputElement>;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLInputElement>;
    onPointerDown?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerMove?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerUp?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerCancel?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerEnter?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerLeave?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerOver?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerOut?: import("react").PointerEventHandler<HTMLInputElement>;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLInputElement>;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLInputElement>;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLInputElement>;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLInputElement>;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLInputElement>;
    onScroll?: import("react").UIEventHandler<HTMLInputElement>;
    onScrollCapture?: import("react").UIEventHandler<HTMLInputElement>;
    onWheel?: import("react").WheelEventHandler<HTMLInputElement>;
    onWheelCapture?: import("react").WheelEventHandler<HTMLInputElement>;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLInputElement>;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLInputElement>;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLInputElement>;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLInputElement>;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLInputElement>;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLInputElement>;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLInputElement>;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLInputElement>;
    defaultChecked?: boolean;
    suppressContentEditableWarning?: boolean;
    accessKey?: string;
    autoFocus?: boolean;
    contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only";
    contextMenu?: string;
    dir?: string;
    draggable?: boolean | "true" | "false";
    hidden?: boolean;
    nonce?: string;
    slot?: string;
    spellCheck?: boolean | "true" | "false";
    translate?: "yes" | "no";
    radioGroup?: string;
    about?: string;
    content?: string;
    datatype?: string;
    inlist?: any;
    property?: string;
    rel?: string;
    resource?: string;
    rev?: string;
    typeof?: string;
    vocab?: string;
    autoCapitalize?: string;
    autoCorrect?: string;
    autoSave?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
    results?: number;
    security?: string;
    unselectable?: "on" | "off";
    inputMode?: "search" | "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal";
    is?: string;
    form?: string;
    list?: string;
    step?: string | number;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    accept?: string;
    alt?: string;
    autoComplete?: import("react").HTMLInputAutoCompleteAttribute;
    capture?: boolean | "user" | "environment";
    checked?: boolean;
    enterKeyHint?: "search" | "enter" | "done" | "go" | "next" | "previous" | "send";
    maxLength?: number;
    minLength?: number;
    multiple?: boolean;
    pattern?: string;
    placeholder?: string;
    required?: boolean;
    src?: string;
    isLoading: boolean;
    className: string;
    prefix: import("react/jsx-runtime").JSX.Element;
    LeftIcon: import("lucide-react").LucideIcon;
    disabled: boolean;
    readOnly: boolean;
    onFocus: import("react").FocusEventHandler<HTMLInputElement>;
    onBlur: import("react").FocusEventHandler<HTMLInputElement>;
    title: string;
    style: import("react").CSSProperties;
    isSearchable: boolean;
    iconSize: number;
    Spinner: import("react/jsx-runtime").JSX.Element;
};
export { getConfig };
//# sourceMappingURL=getConfig.d.ts.map