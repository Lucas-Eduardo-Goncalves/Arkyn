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
          <BreadcrumbLink to="/">Documentation</BreadcrumbLink>
          <BreadcrumbLink to="/v1/server">@arkyn/server</BreadcrumbLink>
          <BreadcrumbLink to="/v1/server/bad-request">
            badRequest
          </BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportUtil />
        <Use />

        <NavigationContainer>
          <NavigationButton
            icon={Ambulance}
            label="@arkyn/server"
            to="/v1/server"
          />
          <NavigationButton
            icon={CreditCard}
            label="calculateCardInstallment"
            to="/v1/server/calculate-card-installment"
          />
        </NavigationContainer>
      </Container>

      <SubMenu>
        <SubMenuLink id="badrequest">Introduction</SubMenuLink>
        <SubMenuLink id="import">Import</SubMenuLink>
        <SubMenuLink id="how-to-use">How to use</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
