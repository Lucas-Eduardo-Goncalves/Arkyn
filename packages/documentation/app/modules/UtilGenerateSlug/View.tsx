import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Ambulance, CreditCard, Link, PaintRoller } from "lucide-react";

import {
  Container,
  NavigationButton,
  NavigationContainer,
  SubMenu,
  SubMenuLink,
} from "~/components";

import { Introduction, ImportUtil, Use, Props } from "./components";

function View() {
  return (
    <>
      <Container>
        <Breadcrumb>
          <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
          <BreadcrumbLink to="/v1/utils">@arkyn/utils</BreadcrumbLink>
          <BreadcrumbLink to="/v1/utils/generate-slug">
            generateSlug
          </BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportUtil />
        <Props />
        <Use />

        <NavigationContainer>
          <NavigationButton
            icon={PaintRoller}
            label="generateColorByString"
            to="/v1/utils/generate-color-by-string"
          />
        </NavigationContainer>
      </Container>

      <SubMenu>
        <SubMenuLink id="generateslug">Introdução</SubMenuLink>
        <SubMenuLink id="importar">Importar</SubMenuLink>
        <SubMenuLink id="propriedades">Propriedades</SubMenuLink>
        <SubMenuLink id="uso">Uso</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
