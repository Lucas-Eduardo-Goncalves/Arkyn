import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { PaintRoller, ThumbsDown } from "lucide-react";

import {
  Container,
  NavigationButton,
  NavigationContainer,
  SubMenu,
  SubMenuLink,
} from "~/components";

import { ImportUtil, Introduction, Props, Use } from "./components";

function View() {
  return (
    <>
      <Container>
        <Breadcrumb>
          <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
          <BreadcrumbLink to="/v1/utils">@arkyn/utils</BreadcrumbLink>
          <BreadcrumbLink to="/v1/utils/calculate-card-installment">
            calculateCardInstallment
          </BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportUtil />
        <Props />
        <Use />

        <NavigationContainer>
          <NavigationButton
            icon={ThumbsDown}
            label="badRequest"
            to="/v1/utils/bad-request"
          />
          <NavigationButton
            icon={PaintRoller}
            label="generateColorByString"
            to="/v1/utils/generate-color-by-string"
          />
        </NavigationContainer>
      </Container>

      <SubMenu>
        <SubMenuLink id="calculatecardinstallment">Introdução</SubMenuLink>
        <SubMenuLink id="importar">Importar</SubMenuLink>
        <SubMenuLink id="propriedades">Propriedades</SubMenuLink>
        <SubMenuLink id="uso">Uso</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
