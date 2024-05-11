import type { InboxFlowDTO } from "./config/InboxFlowDTO";

type ConfigProps = {
  request: Request;
  inbox_flow?: InboxFlowDTO;
};

type MonitoringErrorsDTO = (
  error: string,
  config: ConfigProps
) => Promise<void>;

type InstanceMonitoringErrorsDTO = (
  error: string,
  request: Request
) => Promise<void>;

export type { MonitoringErrorsDTO, InstanceMonitoringErrorsDTO };
