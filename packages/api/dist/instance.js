import { deleteF } from "./functions/delete";
import { get } from "./functions/get";
import { patch } from "./functions/patch";
import { post } from "./functions/post";
import { put } from "./functions/put";
class Instance {
    base_url;
    cached;
    cached_type;
    inbox_flow;
    redis_config;
    constructor(props) {
        this.base_url = props?.base_url;
        this.cached = props?.cached;
        this.cached_type = props?.cached_type;
        this.inbox_flow = props?.inbox_flow;
        this.redis_config = props?.redis_config;
    }
    generateURL(url) {
        return this.base_url ? this.base_url + url : url;
    }
    DELETE = async (url, config) => {
        return await deleteF(this.generateURL(url), {
            inbox_flow: this.inbox_flow,
            ...config,
        });
    };
    GET = async (url, config) => {
        return await get(this.generateURL(url), {
            cached: this.cached,
            cached_type: this.cached_type,
            inbox_flow: this.inbox_flow,
            redis_config: this.redis_config,
            ...config,
        });
    };
    PATCH = async (url, data, config) => {
        return await patch(this.generateURL(url), data, {
            inbox_flow: this.inbox_flow,
            ...config,
        });
    };
    POST = async (url, data, config) => {
        return await post(this.generateURL(url), data, {
            inbox_flow: this.inbox_flow,
            ...config,
        });
    };
    PUT = async (url, data, config) => {
        return await put(this.generateURL(url), data, {
            inbox_flow: this.inbox_flow,
            ...config,
        });
    };
}
export { Instance };
