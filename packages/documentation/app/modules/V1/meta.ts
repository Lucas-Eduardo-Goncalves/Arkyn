import { MetaFunction } from "@remix-run/node";

const meta: MetaFunction = () => [
  { title: "Arkyn Docs" },
  { name: "description", content: "Arkyn Docs" },
];

export { meta };
