import type { InboxFlowDTO } from "./config/InboxFlowDTO";
import type { ResponseDTO } from "./config/ResponseDTO";

type ConfigProps = {
  headers?: RequestInit["headers"];
  inbox_flow?: InboxFlowDTO;
  token?: string;
};

type PutDTO = (
  url: string,
  data: any,
  config: ConfigProps
) => Promise<ResponseDTO>;

type InstancePutDTO = (
  url: string,
  data: any,
  config?: ConfigProps
) => Promise<ResponseDTO>;

export type { PutDTO, InstancePutDTO };
