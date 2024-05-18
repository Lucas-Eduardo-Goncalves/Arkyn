import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Captions, SquareMousePointer } from "lucide-react";

import {
  Container,
  NavigationButton,
  NavigationContainer,
  Paragraph,
  Title,
} from "~/components";

import { Example } from "./components/Example";

function View() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
        <BreadcrumbLink to="/v1/components">@arkyn/components</BreadcrumbLink>
        <BreadcrumbLink to="/v1/components/select">Select</BreadcrumbLink>
      </Breadcrumb>

      <Title as="h1">Select</Title>
      <Example />
    </Container>
  );
}

export { View };
