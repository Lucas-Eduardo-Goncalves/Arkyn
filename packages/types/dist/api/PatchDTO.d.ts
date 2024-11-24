import type { InboxFlowDTO } from "./config/InboxFlowDTO";
import type { ResponseDTO } from "./config/ResponseDTO";
type ConfigProps = {
    headers?: RequestInit["headers"];
    inbox_flow?: InboxFlowDTO;
    token?: string;
};
type PatchDTO = (url: string, data: any, config: ConfigProps) => Promise<ResponseDTO>;
type InstancePatchDTO = (url: string, data: any, config?: ConfigProps) => Promise<ResponseDTO>;
export type { PatchDTO, InstancePatchDTO };
//# sourceMappingURL=PatchDTO.d.ts.map