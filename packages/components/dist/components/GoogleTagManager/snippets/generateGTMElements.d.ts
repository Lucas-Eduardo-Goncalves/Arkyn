type GenerateGTMElementsProps = {
    id: string;
    events: Record<string, string>;
    dataLayer: Record<string, string>;
    dataLayerName: string;
    preview: string;
    auth: string;
};
declare function generateGTMElements(props: GenerateGTMElementsProps): {
    iframe: string;
    script: string;
    dataLayerVar: string;
};
export { generateGTMElements };
//# sourceMappingURL=generateGTMElements.d.ts.map