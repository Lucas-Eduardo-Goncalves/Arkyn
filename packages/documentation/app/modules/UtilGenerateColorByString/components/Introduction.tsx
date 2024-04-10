import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">generateColorByString</Title>

      <Paragraph>
        Esta função, foi criada para gerar cores únicas baseadas em uma string
        de entrada. Ela converte cada caractere da string em um valor numérico e
        utiliza esses valores para calcular valores para os canais vermelho,
        verde e azul (RGB).
      </Paragraph>

      <Paragraph>
        Com base nesses valores de canal, a função gera um código de cor
        hexadecimal que representa a cor final.
      </Paragraph>

      <Paragraph>
        Essa abordagem permite que strings diferentes gerem cores diferentes,
        tornando-a útil para situações onde você queira associar cores a
        elementos específicos com base em seu nome ou identificador.
      </Paragraph>
    </>
  );
}

export { Introduction };
