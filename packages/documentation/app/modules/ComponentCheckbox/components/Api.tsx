import { Note, Paragraph, Title } from "~/components";
import { ApiTable } from "~/components/ApiTable";

const columns = [
  {
    name: "size",
    type: "<code>sm</code> | <code>md</code> | <code>lg</code>",
    default: "md",
    description: "Changes the checkbox size.",
  },
  {
    name: "isError",
    type: "<code>true</code> | <code>false</code> ",
    default: "false",
    description: "Checkbox in error state.",
  },
  {
    name: "name",
    type: "string",
    default: "",
    description: "Name field, 'required'",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "Initial state of the checkbox.",
  },
  {
    name: "onCheck",
    type: "<code>(e: string) => void;</code>",
    default: "() => {}",
    description: "Callback when the checkbox is checked.",
  },
];

function Api() {
  return (
    <>
      <Title as="h2">Api</Title>
      <Paragraph>Props reference.</Paragraph>

      <Note type="info">
        In addition to the following props, the Checkbox also has all the props
        of a common <code>div</code>.
      </Note>

      <ApiTable>
        <thead>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Standard</th>
          </tr>
        </thead>
        <tbody>
          {columns.map((column) => (
            <tr key={column.name}>
              <td>{column.name}</td>
              <td>{column.description}</td>
              <td dangerouslySetInnerHTML={{ __html: column.type }} />
              <td>{column.default}</td>
            </tr>
          ))}
        </tbody>
      </ApiTable>
    </>
  );
}

export { Api };
