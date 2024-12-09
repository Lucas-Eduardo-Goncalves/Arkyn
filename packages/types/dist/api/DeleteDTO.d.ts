import type { InboxFlowDTO } from "./config/InboxFlowDTO";
import type { ResponseDTO } from "./config/ResponseDTO";
type ConfigProps = {
    headers?: RequestInit["headers"];
    body?: any;
    inbox_flow?: InboxFlowDTO;
    token?: string;
};
type DeleteDTO = (url: string, config: ConfigProps) => Promise<ResponseDTO>;
type InstanceDeleteDTO = (url: string, config?: ConfigProps) => Promise<ResponseDTO>;
export type { DeleteDTO, InstanceDeleteDTO };
//# sourceMappingURL=DeleteDTO.d.ts.map