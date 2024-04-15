import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { PaintRoller, ThumbsDown } from "lucide-react";

import {
  Container,
  NavigationButton,
  NavigationContainer,
  SubMenu,
  SubMenuLink,
} from "~/components";

import { ImportUtil, Introduction, Use } from "./components";

function View() {
  return (
    <>
      <Container>
        <Breadcrumb>
          <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
          <BreadcrumbLink to="/v1/shared">@arkyn/shared</BreadcrumbLink>
          <BreadcrumbLink to="/v1/shared/calculate-card-installment">
            calculateCardInstallment
          </BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportUtil />
        <Use />

        <NavigationContainer>
          <NavigationButton
            icon={ThumbsDown}
            label="badRequest"
            to="/v1/shared/bad-request"
          />
          <NavigationButton
            icon={PaintRoller}
            label="generateColorByString"
            to="/v1/shared/generate-color-by-string"
          />
        </NavigationContainer>
      </Container>

      <SubMenu>
        <SubMenuLink id="calculatecardinstallment">Introdução</SubMenuLink>
        <SubMenuLink id="importar">Importar</SubMenuLink>
        <SubMenuLink id="modo-de-uso">Modo de uso</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
