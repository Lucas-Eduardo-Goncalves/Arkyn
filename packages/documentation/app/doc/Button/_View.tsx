import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Badge, SquareMousePointer } from "lucide-react";

import { Container, NavigationButton, NavigationContainer } from "~/components";

import { ButtonWithIcon } from "./components/ButtonWithIcon";
import { ImportComponent } from "./components/ImportComponent";
import { ImportType } from "./components/ImportTypes";
import { Introduction } from "./components/Introduction";
import { Loading } from "./components/Loading";
import { Schemes } from "./components/Schemes";
import { Size } from "./components/Size";
import { Use } from "./components/Use";
import { Variant } from "./components/Variants";

function View() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
        <BreadcrumbLink to="/v1/components">@arkyn/components</BreadcrumbLink>
        <BreadcrumbLink to="/v1/components/button">Button</BreadcrumbLink>
      </Breadcrumb>

      <Introduction />
      <ImportComponent />
      <ImportType />

      <Use />
      <Size />
      <Variant />
      <Schemes />
      <ButtonWithIcon />
      <Loading />

      <NavigationContainer>
        <NavigationButton
          icon={Badge}
          label="Badge"
          to="/v1/components/badge"
        />
        <NavigationButton
          icon={SquareMousePointer}
          label="IconButton"
          to="/v1/components/icon-button"
        />
      </NavigationContainer>
    </Container>
  );
}

export { View };
