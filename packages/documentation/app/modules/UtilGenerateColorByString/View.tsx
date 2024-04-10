import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Ambulance, CreditCard } from "lucide-react";

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
          <BreadcrumbLink to="/v1/utils/generate-color-by-string">
            generateColorByString
          </BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportUtil />
        <Props />
        <Use />

        <NavigationContainer>
          <NavigationButton
            icon={Ambulance}
            label="@arkyn/utils"
            to="/v1/utils"
          />
          <NavigationButton
            icon={CreditCard}
            label="calculateCardInstallment"
            to="/v1/utils/calculate-card-installment"
          />
        </NavigationContainer>
      </Container>

      <SubMenu>
        <SubMenuLink id="generatecolorbystring">Introdução</SubMenuLink>
        <SubMenuLink id="importar">Importar</SubMenuLink>
        <SubMenuLink id="propriedades">Propriedades</SubMenuLink>
        <SubMenuLink id="uso">Uso</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
