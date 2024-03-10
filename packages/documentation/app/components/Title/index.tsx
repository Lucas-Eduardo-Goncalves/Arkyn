import { H1, H2, H3 } from "./styles";

type TitleProps = {
  children: string;
  as: "h1" | "h2" | "h3";
};

const baseTitle = {
  h1: H1,
  h2: H2,
  h3: H3,
};

function Title({ children, as }: TitleProps) {
  const ShowTitle = baseTitle[as];
  const id = children.trim().replaceAll(" ", "-").toLowerCase();

  return <ShowTitle id={id}>{children}</ShowTitle>;
}

export { Title };
