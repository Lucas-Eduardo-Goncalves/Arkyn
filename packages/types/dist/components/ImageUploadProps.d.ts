type ImageUploadProps = {
    name: string;
    defaultValue?: string | null;
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
type NoFileContentProps = {
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
type HasFileContentProps = {
    acceptImage: string;
    isLoading: boolean;
    changeImageButtonText: string;
    filePath: string;
    reSendImage?: () => void;
    handleSelectFile: (file: File) => void;
};
export type { HasFileContentProps, ImageUploadErrorProps, ImageUploadLabelProps, ImageUploadProps, NoFileContentProps, };
//# sourceMappingURL=ImageUploadProps.d.ts.map