import { Note, Paragraph, Title } from "~/components";
import { ApiTable } from "~/components/ApiTable";

const columns = [
  {
    name: "size",
    type: "<code>md</code> | <code>lg</code>",
    default: "md",
    description: "Changes the size of the badge.",
  },
  {
    name: "variant",
    type: "<code>solid</code> | <code>outline</code> | <code>ghost</code>",
    default: "ghost",
    description: "Changes the style of the emblem.",
  },

  {
    name: "scheme",
    type: "<code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code> | <code >info</code>",
    default: "primary",
    description: "Changes the color scheme of the emblem.",
  },

  {
    name: "leftIcon",
    type: "LucideIcon",
    default: "-",
    description: "Add an icon to the left that matches the size of the emblem.",
  },
  {
    name: "rightIcon",
    type: "LucideIcon",
    default: "-",
    description:
      "Add an icon to the right that matches the size of the emblem.",
  },
];

function Api() {
  return (
    <>
      <Title as="h2">Api</Title>
      <Paragraph>Props reference.</Paragraph>

      <Note type="info">
        In addition to the following props, the emblem also has all the props of
        a common <code>div</code>.
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
