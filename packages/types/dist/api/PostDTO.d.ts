/// <reference types="node" />
import type { InboxFlowDTO } from "./config/InboxFlowDTO";
import type { ResponseDTO } from "./config/ResponseDTO";
type ConfigProps = {
    headers?: RequestInit["headers"];
    inbox_flow?: InboxFlowDTO;
    token?: string;
};
type PostDTO = (url: string, data: any, config: ConfigProps) => Promise<ResponseDTO>;
type InstancePostDTO = (url: string, data: any, config?: ConfigProps) => Promise<ResponseDTO>;
export type { PostDTO, InstancePostDTO };
//# sourceMappingURL=PostDTO.d.ts.map