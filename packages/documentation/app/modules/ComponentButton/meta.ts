import { MetaFunction } from "@remix-run/node";

const meta: MetaFunction = () => [
  { title: "Arkyn | Button" },
  {
    name: "description",
    content:
      "Arkyn Button: flexível e personalizável, oferecendo uma gama de opções para design e funcionalidade, incluindo tamanhos, estilos, esquemas de cores e icones.",
  },
];

export { meta };
