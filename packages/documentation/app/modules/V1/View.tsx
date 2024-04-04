import { Outlet } from "@remix-run/react";

import {
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  NavigationLink,
  NavigationMenu,
  NavigationTitle,
} from "./components";

function View() {
  return (
    <>
      <LayoutHeader />
      <LayoutContent>
        <NavigationMenu>
          <NavigationLink to="/v1/doc/introduction" label="Introdução" />
          <NavigationLink to="/v1/doc/get-started" label="Começo Rápido" />
          <NavigationTitle label="Components" />
          <NavigationLink to="/v1/components/badge" label="Badge" />
          <NavigationLink to="/v1/components/button" label="Button" />
          <NavigationLink to="/v1/components/icon-button" label="IconButton" />
          <NavigationLink to="/v1/components/input" label="Input" />

          <NavigationTitle label="Utils" />
          <NavigationLink to="/v1/utils/bad-request" label="badRequest" />
          <NavigationLink
            to="/v1/utils/calculate-card-installment"
            label="calculateCardInstallment"
          />
          <NavigationLink
            to="/v1/utils/create-random-color"
            label="createRandomColor"
          />
          <NavigationLink to="/v1/utils/create-slug" label="createSlug" />
          <NavigationLink
            to="/v1/utils/get-scoped-params"
            label="getScopedParams"
          />
        </NavigationMenu>
        <Outlet />
      </LayoutContent>
      <LayoutFooter />
    </>
  );
}

export { View };
