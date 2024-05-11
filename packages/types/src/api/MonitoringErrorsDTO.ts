import type { InboxFlowDTO } from "./config/InboxFlowDTO";

type ConfigProps = {
  request: Request;
  inbox_flow?: InboxFlowDTO;
};

type MonitoringErrorsDTO = (error: any, config: ConfigProps) => Promise<void>;

export type { MonitoringErrorsDTO };
