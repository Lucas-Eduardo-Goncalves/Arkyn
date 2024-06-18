import { Paragraph, Title } from "~/components";

function Options() {
  return (
    <>
      <Title as="h3">Options</Title>

      <Paragraph>The following options are available:</Paragraph>
      <Paragraph>
        <strong>URL:</strong> Will validate urls. <br />
        <strong>RG:</strong> Validate the ID numbers of a Brazilian citizen.
        <br />
        <strong>PHONE:</strong> (+00 00 00000-0000).
        <br />
        <strong>CPF:</strong> (000.000.000-00).
        <br />
        <strong>CNPJ:</strong> (00.000.000/0000-00).
        <br />
        <strong>CEP:</strong> (00000-000).
        <br />
        <strong>CPFCNPJ:</strong> CPF or CNPJ.
        <br />
        <strong>PASSWORD:</strong> There are at least 8 characters. Contains at
        least one alphanumeric character. Contains at least one capital letter.
        Contains at least one lowercase letter. Contains at least one digit.
        Contains at least one of the following special characters 
      </Paragraph>
    </>
  );
}

export { Options };
