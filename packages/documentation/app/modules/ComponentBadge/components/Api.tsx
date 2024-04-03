import { Note, Paragraph, Title } from "~/components";
import { ApiTable } from "~/components/ApiTable";

const columns = [
  {
    name: "size",
    type: "<code>md</code> | <code>lg</code>",
    default: "md",
    description: "Altera o tamanho do emblema.",
  },
  {
    name: "variant",
    type: "<code>solid</code> | <code>outline</code> | <code>ghost</code>",
    default: "ghost",
    description: "Altera o tipo de estilização do emblema.",
  },

  {
    name: "scheme",
    type: "<code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code> | <code>info</code>",
    default: "primary",
    description: "Altera o esquema de cores do emblema.",
  },

  {
    name: "leftIcon",
    type: "LucideIcon",
    default: "-",
    description:
      "Adiciona um icone a esquerda que acompanha o tamanho do emblema.",
  },
  {
    name: "rightIcon",
    type: "LucideIcon",
    default: "-",
    description:
      "Adiciona um icone a direita que acompanha o tamanho do emblema.",
  },
];

function Api() {
  return (
    <>
      <Title as="h2">Api</Title>
      <Paragraph>Referência de adereços.</Paragraph>

      <Note type="info">
        Além dos adereços a seguir, o emblema também possuí todos os adereços de
        uma <code>div</code> comum.
      </Note>

      <ApiTable>
        <thead>
          <tr>
            <th>Propriedade</th>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Padrão</th>
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
