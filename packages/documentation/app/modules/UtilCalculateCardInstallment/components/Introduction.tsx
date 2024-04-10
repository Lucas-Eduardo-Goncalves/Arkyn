import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">calculateCardInstallment</Title>

      <Paragraph>
        É uma utilidade que oferece uma maneira eficiente de calcular o preço
        total e o preço da parcela para uma transação de compra parcelada com
        cartão de crédito.
      </Paragraph>

      <Paragraph>
        Esta função é projetada para ser utilizada em projetos que seguem as
        definições de tipos fornecidas pelo pacote <code>@arkyn/types</code>. Ao
        receber os argumentos necessários para o cálculo, como o preço à vista,
        o número de parcelas desejadas e as taxas aplicáveis (opcional), a
        função executa os cálculos apropriados, levando em consideração as taxas
        de juros compostas. Essa abordagem ajuda a simplificar o processo de
        implementação de cálculos complexos relacionados a transações
        financeiras, mantendo a clareza e a precisão nos resultados obtidos.
      </Paragraph>
    </>
  );
}

export { Introduction };
