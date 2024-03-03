import { GenerateIconList } from "~/components";

export default () => (
  <section style={{ width: 800 }}>
    <h4>Outline Input</h4>
    <GenerateIconList variant="outline" />

    <h4>Solid Input</h4>
    <GenerateIconList variant="solid" />

    <h4>Underline Input</h4>
    <GenerateIconList variant="underline" />
  </section>
);
