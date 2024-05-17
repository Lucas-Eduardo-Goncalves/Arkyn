import { Fence, Paragraph, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">How to use</Title>

      <Paragraph>
        The function has a simple use, in which the value to be formatted must
        be informed, the function will return an object with the formatting
        using the suffix, and another without.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { currencyFormat } from "@arkyn/shared";

function someFunction() {
  const currency = currencyFormat(25.5045);
  
  console.log(currency.value); // R$ 25,50
  console.log(currency.valueWithoutPrefix); // 25,50
}`}
      </Fence>
    </>
  );
}

export { Use };
