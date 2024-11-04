import type { Params } from "@remix-run/react";
import type { InboxFlowDTO } from "./config/InboxFlowDTO";

type ConfigProps = {
  request: Request;
  params: Params;
  inbox_flow: InboxFlowDTO;
};

type MonitoringErrorsDTO = (error: any, config: ConfigProps) => Promise<void>;

export type { MonitoringErrorsDTO };
