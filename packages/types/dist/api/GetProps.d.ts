/// <reference types="node" />
import type { ResponseDTO } from "./ResponseDTO";
type ConfigDTO = {
    cached: true;
    cached_type: "url" | "url-token";
    headers: RequestInit["headers"];
};
type GetProps = (url: string, config: ConfigDTO) => Promise<ResponseDTO>;
export type { GetProps };
//# sourceMappingURL=GetProps.d.ts.map