function appendToDataLayer(props) {
    const { dataLayer, dataLayerName } = props;
    return `
  window.${dataLayerName} = window.${dataLayerName} || [];
  window.${dataLayerName}.push(${JSON.stringify(dataLayer)})`;
}
export { appendToDataLayer };
