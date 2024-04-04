import { Note, Paragraph, Title } from "~/components";
import { ApiTable } from "~/components/ApiTable";

const columns = [
  {
    name: "icon",
    type: "LucideIcon",
    default: "-",
    description: "Adiciona o icone ao botão (obrigatório).",
  },
  {
    name: "aria-label",
    type: "string",
    default: "-",
    description:
      "Adiciona uma descrição informando o que esse botão fará (obrigatório).",
  },
  {
    name: "size",
    type: "<code>xs</code> | <code>sm</code> | <code>md</code> | <code>lg</code>",
    default: "md",
    description: "Altera o tamanho do botão.",
  },
  {
    name: "variant",
    type: "<code>solid</code> | <code>outline</code> | <code>ghost</code> | <code>invisible</code>",
    default: "solid",
    description: "Altera o tipo de estilização do botão.",
  },
  {
    name: "scheme",
    type: "<code>primary</code> | <code>success</code> | <code>warning</code> | <code>danger</code>",
    default: "primary",
    description: "Altera o esquema de cores do botão.",
  },
  {
    name: "isLoading",
    type: "boolean",
    default: "-",
    description: "Coloca o botão em estado de carregamento.",
  },
];

function Api() {
  return (
    <>
      <Title as="h2">Api</Title>
      <Paragraph>Referência de adereços.</Paragraph>

      <Note type="info">
        Além dos adereços a seguir, o botão também possuí todos os adereços de
        uma <code>button</code> comum.
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
