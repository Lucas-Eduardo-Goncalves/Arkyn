import { Select } from "@arkyn/components";
import { Container } from "./styles";

function Example() {
  return (
    <>
      <Container>
        <Select
          name="example"
          placeholder="Example"
          closeOnSelect
          options={[
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
          ]}
        />

        <Select
          name="example2"
          isSearchable
          closeOnSelect
          placeholder="Example 2"
          options={[
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
          ]}
        />
      </Container>
    </>
  );
}

export { Example };
