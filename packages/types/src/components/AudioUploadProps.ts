type AudioUploadErrorProps = {
  error: string;
};

type AudioUploadLabelProps = {
  label: string;
  showAsterisk?: boolean;
};

type AudioUploadHasFileContentProps = {
  filePath: string;
  disabled: boolean;
  acceptAudio: string;
  isLoading: boolean;
  handleSelectFile: (file: File) => void;
  reSendAudio?: () => void;
  changeAudioButtonText: string;
};

type AudioUploadNoFileContentProps = {
  disabled: boolean;
  acceptAudio: string;
  isLoading: boolean;
  selectAudioButtonText: string;
  dropAudioText: string;
  handleSelectFile: (file: File) => void;
};

type AudioUploadProps = {
  name: string;
  action: string;

  fileName?: string;
  method?: string;

  acceptAudio?: string;
  dropAudioText?: string;
  selectAudioButtonText?: string;
  changeAudioButtonText?: string;

  onUpload?: (url?: string) => void;
  fileResponseName?: string;

  label?: string;
  showAsterisk?: boolean;

  disabled?: boolean;
  defaultValue?: string;
};

export type {
  AudioUploadErrorProps,
  AudioUploadHasFileContentProps,
  AudioUploadLabelProps,
  AudioUploadNoFileContentProps,
  AudioUploadProps,
};
