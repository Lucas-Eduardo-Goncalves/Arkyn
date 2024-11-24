import type { InboxFlowDTO } from "@arkyn/types";
type ConfigProps = {
    status: number;
    method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "ERROR";
    request: string;
    response: string;
    token: string;
} & InboxFlowDTO;
declare function sendInboxFlow(config: ConfigProps): Promise<void>;
export { sendInboxFlow };
//# sourceMappingURL=sendInboxFlow.d.ts.map