import { Tooltip } from "@arkyn/components";

export default () => (
  <>
    <h4>Tooltip</h4>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginLeft: "4rem",
      }}
    >
      <Tooltip size="lg" text="Hello word">
        <p>Top Tooltip (lg)</p>
      </Tooltip>

      <Tooltip size="lg" orientation="left" text="Hello word">
        <p>Left Tooltip (lg)</p>
      </Tooltip>

      <Tooltip size="lg" orientation="bottom" text="Hello word">
        <p>Bottom Tooltip (lg)</p>
      </Tooltip>

      <Tooltip size="lg" orientation="right" text="Hello word">
        <p>Right Tooltip (lg)</p>
      </Tooltip>
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginLeft: "4rem",
      }}
    >
      <Tooltip size="md" text="Hello word">
        <p>Top Tooltip (md)</p>
      </Tooltip>

      <Tooltip size="md" orientation="left" text="Hello word">
        <p>Left Tooltip (md)</p>
      </Tooltip>

      <Tooltip size="md" orientation="bottom" text="Hello word">
        <p>Bottom Tooltip (md)</p>
      </Tooltip>

      <Tooltip size="md" orientation="right" text="Hello word">
        <p>Right Tooltip (md)</p>
      </Tooltip>
    </div>
  </>
);
