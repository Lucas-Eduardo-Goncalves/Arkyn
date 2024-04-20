import type {
  InstanceGetDTO,
  InboxFlowDTO,
  InstanceConstructorProps,
  RedisDTO,
} from "@arkyn/types";

import { get } from "./functions/get";

class Instance {
  private base_url?: string;
  private cached?: boolean;
  private cached_type?: "url" | "url-token";
  private inbox_flow?: InboxFlowDTO;
  private redis_config?: RedisDTO;

  constructor(props?: InstanceConstructorProps) {
    this.base_url = props?.base_url;
    this.cached = props?.cached;
    this.cached_type = props?.cached_type;
    this.inbox_flow = props?.inbox_flow;
    this.redis_config = props?.redis_config;
  }

  GET: InstanceGetDTO = async (url, config) => {
    return await get(this.base_url ? this.base_url + url : url, {
      cached: this.cached,
      cached_type: this.cached_type,
      inbox_flow: this.inbox_flow,
      redis_config: this.redis_config,
      ...config,
    });
  };
}

export { Instance };
