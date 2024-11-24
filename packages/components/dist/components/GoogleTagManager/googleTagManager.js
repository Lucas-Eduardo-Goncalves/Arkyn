import { appendToDataLayer } from "./snippets/appendToDataLayer";
import { generateGTMElements } from "./snippets/generateGTMElements";
class GoogleTagManager {
    initializeDataScript(dataLayer) {
        const script = document.createElement("script");
        script.innerHTML = dataLayer;
        return script;
    }
    initializeGTMElements(props) {
        const snippets = generateGTMElements(props);
        const noScript = () => {
            const noscript = document.createElement("noscript");
            noscript.innerHTML = snippets.iframe;
            return noscript;
        };
        const script = () => {
            const script = document.createElement("script");
            script.innerHTML = snippets.script;
            return script;
        };
        const dataScript = this.initializeDataScript(snippets.dataLayerVar);
        return {
            noScript,
            script,
            dataScript,
        };
    }
    initializeDataLayer(props) {
        const { dataLayer, dataLayerName } = props;
        if (window[dataLayerName])
            return window[dataLayerName].push(dataLayer);
        const snippets = appendToDataLayer({ dataLayer, dataLayerName });
        const dataScript = this.initializeDataScript(snippets);
        document.head.insertBefore(dataScript, document.head.childNodes[0]);
    }
    initialize(props) {
        const { events, gtmId, dataLayer, auth = "", preview = "", dataLayerName = "dataLayer", } = props;
        const gtm = this.initializeGTMElements({
            id: gtmId,
            events: events,
            dataLayer: dataLayer || undefined,
            dataLayerName: dataLayerName,
            auth,
            preview,
        });
        if (dataLayer)
            document.head.appendChild(gtm.dataScript);
        document.head.insertBefore(gtm.script(), document.head.childNodes[0]);
        document.body.insertBefore(gtm.noScript(), document.body.childNodes[0]);
    }
}
export { GoogleTagManager };
