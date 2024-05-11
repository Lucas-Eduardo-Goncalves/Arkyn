import type { InstanceConstructorProps, InstanceDeleteDTO, InstanceGetDTO, InstanceMonitoringErrorsDTO, InstancePatchDTO, InstancePostDTO, InstancePutDTO } from "@arkyn/types";
declare class Instance {
    private base_url?;
    private cached?;
    private cached_type?;
    private inbox_flow?;
    private redis_config?;
    constructor(props?: InstanceConstructorProps);
    private generateURL;
    DELETE: InstanceDeleteDTO;
    GET: InstanceGetDTO;
    PATCH: InstancePatchDTO;
    POST: InstancePostDTO;
    PUT: InstancePutDTO;
    MONITORING_REMIX_ERRORS: InstanceMonitoringErrorsDTO;
}
export { Instance };
//# sourceMappingURL=instance.d.ts.map