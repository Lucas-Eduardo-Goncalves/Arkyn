import { Note, Paragraph, Title } from "~/components";
import { ApiTable } from "~/components/ApiTable";

const columns = [
  {
    name: "size",
    type: "<code>xs</code> | <code>sm</code> | <code>md</code> | <code>lg</code>",
    default: "md",
    description: "Changes the button size.",
  },
  {
    name: "variant",
    type: "<code>solid</code> | <code>outline</code> | <code>ghost</code> | <code>invisible</code>",
    default: "solid",
    description: "Changes the button styling type.",
  },

  {
    name: "scheme",
    type: "<code>primary</code> | <code>success</code> | <code>warning</code> | <code>danger</code>",
    default: "primary",
    description: "Changes the button's color scheme.",
  },

  {
    name: "leftIcon",
    type: "LucideIcon",
    default: "-",
    description: "Add an icon to the left that matches the size of the button.",
  },
  {
    name: "rightIcon",
    type: "LucideIcon",
    default: "-",
    description: "Add an icon to the right that matches the button size.",
  },

  {
    name: "isLoading",
    type: "boolean",
    default: "-",
    description: "Puts the button in loading state.",
  },
  {
    name: "loadingText",
    type: "string",
    default: "-",
    description: "Adds text to the button in loading state.",
  },
];
function Api() {
  return (
    <>
      <Title as="h2">Api</Title>
      <Paragraph>Props reference.</Paragraph>

      <Note type="info">
        In addition to the following props, the button also has all the props of
        a common <code>button</code>.
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
