type ImageUploadProps = {
    name: string;
    defaultValue?: string | null;
    disabled?: boolean;
    label?: string;
    showAsterisk?: boolean;
    changeImageButtonText?: string;
    selectImageButtonText?: string;
    dropImageText?: string;
    action: string;
    method?: string;
    fileName?: string;
    fileResponseName?: string;
    acceptImage?: string;
    onUpload?: (url?: string) => void;
};
type ImageUploadNoFileContentProps = {
    disabled: boolean;
    acceptImage: string;
    isLoading: boolean;
    selectImageButtonText: string;
    dropImageText: string;
    handleSelectFile: (file: File) => void;
};
type ImageUploadLabelProps = {
    label: string;
    showAsterisk?: boolean;
};
type ImageUploadErrorProps = {
    error: string;
};
type ImageUploadHasFileContentProps = {
    disabled: boolean;
    acceptImage: string;
    isLoading: boolean;
    changeImageButtonText: string;
    filePath: string;
    reSendImage?: () => void;
    handleSelectFile: (file: File) => void;
};
export type { ImageUploadHasFileContentProps, ImageUploadErrorProps, ImageUploadLabelProps, ImageUploadProps, ImageUploadNoFileContentProps, };
//# sourceMappingURL=ImageUploadProps.d.ts.map