import { Divider } from "@arkyn/components";

export default () => (
  <section style={{ width: 800 }}>
    <h4>Horizontal Divider</h4>
    <div style={{ display: "flex", width: 400, height: 4 }}>
      <Divider />
    </div>

    <h4>Vertical Divider</h4>
    <div style={{ display: "flex", width: 4, height: 400 }}>
      <Divider orientation="vertical" />
    </div>
  </section>
);
