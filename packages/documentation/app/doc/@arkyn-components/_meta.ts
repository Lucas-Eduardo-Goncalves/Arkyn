import { MetaFunction } from "@remix-run/node";

const meta: MetaFunction = () => [
  { title: "@arkyn/components" },
  {
    name: "description",
    content:
      "Arkyn é uma coleção de componentes de UI usados ​​no Arkyn. Todos eles são de código aberto e podem ser usados ​​em seus próprios projetos. Confira os componentes no npm @arkyn/components.",
  },
];

export { meta };
