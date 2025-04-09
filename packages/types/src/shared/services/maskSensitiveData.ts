type MaskSensitiveDataFunction = (
  jsonString: string,
  sensitiveKeys?: string[]
) => string;

export type { MaskSensitiveDataFunction };
