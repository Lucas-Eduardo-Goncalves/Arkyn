import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Ambulance, CreditCard } from "lucide-react";

import {
  Container,
  NavigationButton,
  NavigationContainer,
  SubMenu,
  SubMenuLink,
} from "~/components";

import { Introduction, ImportUtil, Use } from "./components";

function View() {
  return (
    <>
      <Container>
        <Breadcrumb>
          <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
          <BreadcrumbLink to="/v1/utils">@arkyn/utils</BreadcrumbLink>
          <BreadcrumbLink to="/v1/utils/bad-request">badRequest</BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportUtil />
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
        <SubMenuLink id="badrequest">Introdução</SubMenuLink>
        <SubMenuLink id="importar">Importar</SubMenuLink>
        <SubMenuLink id="modo-de-uso">Modo de uso</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
