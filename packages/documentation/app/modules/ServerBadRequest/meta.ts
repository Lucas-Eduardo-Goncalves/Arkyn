import { MetaFunction } from "@remix-run/node";

const meta: MetaFunction = () => [
  { title: "Server | badRequest" },
  { name: "description", content: "" },
];

export { meta };
