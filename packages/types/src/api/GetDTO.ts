import type { InboxFlowDTO } from "./config/InboxFlowDTO";
import type { RedisDTO } from "./config/RedisDTO";
import type { ResponseDTO } from "./config/ResponseDTO";

type ConfigProps = {
  headers?: RequestInit["headers"];
  token?: string;

  cached?: boolean;
  cached_type?: "url" | "url-token";

  inbox_flow?: InboxFlowDTO;
  redis_config?: RedisDTO;
};

type GetDTO = (url: string, config: ConfigProps) => Promise<ResponseDTO>;

type InstanceGetDTO = (
  url: string,
  config?: ConfigProps
) => Promise<ResponseDTO>;

export type { GetDTO, InstanceGetDTO };