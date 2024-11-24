import type { InboxFlowDTO } from "./config/InboxFlowDTO";
import type { RedisDTO } from "./config/RedisDTO";
type InstanceConstructorProps = {
    base_url?: string;
    cached?: boolean;
    cached_type?: "url" | "url-token";
    inbox_flow?: InboxFlowDTO;
    redis_config?: RedisDTO;
};
export type { InstanceConstructorProps };
//# sourceMappingURL=InstanceConstructorProps.d.ts.map