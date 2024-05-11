import type {
  InboxFlowDTO,
  InstanceConstructorProps,
  InstanceDeleteDTO,
  InstanceGetDTO,
  InstanceMonitoringErrorsDTO,
  InstancePatchDTO,
  InstancePostDTO,
  InstancePutDTO,
  RedisDTO,
} from "@arkyn/types";

import { deleteF } from "./functions/delete";
import { get } from "./functions/get";
import { patch } from "./functions/patch";
import { post } from "./functions/post";
import { put } from "./functions/put";
import { monitoringErrors } from "./functions/monitoringErrors";

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

  private generateURL(url: string) {
    return this.base_url ? this.base_url + url : url;
  }

  DELETE: InstanceDeleteDTO = async (url, config) => {
    return await deleteF(this.generateURL(url), {
      inbox_flow: this.inbox_flow,
      ...config,
    });
  };

  GET: InstanceGetDTO = async (url, config) => {
    return await get(this.generateURL(url), {
      cached: this.cached,
      cached_type: this.cached_type,
      inbox_flow: this.inbox_flow,
      redis_config: this.redis_config,
      ...config,
    });
  };

  PATCH: InstancePatchDTO = async (url, data, config) => {
    return await patch(this.generateURL(url), data, {
      inbox_flow: this.inbox_flow,
      ...config,
    });
  };

  POST: InstancePostDTO = async (url, data, config) => {
    return await post(this.generateURL(url), data, {
      inbox_flow: this.inbox_flow,
      ...config,
    });
  };

  PUT: InstancePutDTO = async (url, data, config) => {
    return await put(this.generateURL(url), data, {
      inbox_flow: this.inbox_flow,
      ...config,
    });
  };

  MONITORING_REMIX_ERRORS: InstanceMonitoringErrorsDTO = async (
    error,
    request
  ) => {
    return await monitoringErrors(error, {
      request,
      inbox_flow: this.inbox_flow,
    });
  };
}

export { Instance };
