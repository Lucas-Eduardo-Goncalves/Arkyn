import { ClientOnly } from "../../components/ClientOnly";
import { GoogleTagManagerClient } from "./GoogleTagManager.client";

type GoogleTagManagerProps = {
  gtmId: string;
  events?: Record<string, string>;
  dataLayer?: Record<string, string>;
  dataLayerName?: string;
  auth?: string;
  preview?: string;
  showInDevMode?: boolean;
};

function GoogleTagManager(props: GoogleTagManagerProps) {
  const {
    gtmId,
    auth = "",
    preview = "",
    dataLayerName = "dataLayer",
    events = {},
    dataLayer = {},
    showInDevMode = false,
  } = props;

  if (process.env.NODE_ENV !== "production" && !showInDevMode) {
    return <></>;
  }

  return (
    <ClientOnly>
      {() => (
        <GoogleTagManagerClient
          auth={auth}
          dataLayer={dataLayer}
          dataLayerName={dataLayerName}
          events={events}
          gtmId={gtmId}
          preview={preview}
        />
      )}
    </ClientOnly>
  );
}

export { GoogleTagManager };
