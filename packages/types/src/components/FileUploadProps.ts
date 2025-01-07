type FileUploadProps = {
  name: string;

  disabled?: boolean;

  label?: string;
  showAsterisk?: boolean;

  changeFileButtonText?: string;
  selectFileButtonText?: string;
  dropFileText?: string;

  action: string;
  method?: string;
  fileName?: string;
  fileResponseName?: string;
  acceptFile?: string;

  onUpload?: (url?: string) => void;
};

type FileUploadNoFileContentProps = {
  disabled: boolean;
  acceptFile: string;
  isLoading: boolean;
  selectFileButtonText: string;
  dropFileText: string;
  handleSelectFile: (file: File) => void;
};

type FileUploadLabelProps = {
  label: string;
  showAsterisk?: boolean;
};

type FileUploadErrorProps = {
  error: string;
};

type FileUploadHasFileContentProps = {
  disabled: boolean;
  acceptFile: string;
  isLoading: boolean;
  changeFileButtonText: string;
  file: File;
  reSendFile?: () => void;
  handleSelectFile: (file: File) => void;
};

export type {
  FileUploadHasFileContentProps,
  FileUploadErrorProps,
  FileUploadLabelProps,
  FileUploadProps,
  FileUploadNoFileContentProps,
};
