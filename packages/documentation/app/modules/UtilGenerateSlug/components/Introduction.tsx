import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">generateSlug</Title>

      <Paragraph>
        Esta função, foi criada para gerar slugs (textos curtos usados em URLs)
        limpos e consistentes a partir de strings (textos) fornecidas pelo
        usuário. Ela segue um processo detalhado para garantir que os slugs
        sejam:
      </Paragraph>

      <Paragraph>
        <strong>- Compatíveis com URLs:</strong> Remove caracteres especiais que
        não são permitidos em URLs, como acentos (<code>à</code>, <code>ê</code>
        , <code>í</code>) e pontuação (<code>!</code>, <code>@</code>,{" "}
        <code>#</code>). <br />
        <strong>-Separados por hífen:</strong> Substitui espaços em branco por
        hífens (<code>-</code>), tornando o slug mais legível e separando as
        palavras. <br />
        <strong>- Minúsculas</strong>: Converte toda a string para minúsculas,
        garantindo consistência na geração do slug. <br />
        <strong>- Hífens limpos:</strong> Remove sequências repetidas de hífens,
        evitando URLs desorganizadas. <br />
        <strong>- Sem hífens no início ou fim:</strong> Remove hífens no início
        e no final do slug, garantindo URLs válidas.
      </Paragraph>

      <Paragraph>
        Ao utilizar o <code>generateSlug</code>, você garante a criação de slugs
        padronizados e amigáveis para URLs, o que melhora a experiência do
        usuário e a otimização de mecanismos de busca para o seu site.
      </Paragraph>
    </>
  );
}

export { Introduction };
