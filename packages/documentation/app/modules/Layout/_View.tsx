import { Outlet } from "@remix-run/react";

import {
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  NavigationAccordion,
  NavigationLink,
  NavigationMenu,
  NavigationTitle,
} from "./components";

import { route_components } from "./config/route-list";

export function View() {
  return (
    <>
      <LayoutHeader />
      <LayoutContent>
        <NavigationMenu>
          <NavigationLink to="/v1/doc/introduction" label="Introdução" />
          <NavigationLink to="/v1/doc/get-started" label="Começo Rápido" />
          <NavigationTitle label="Pacotes" />
          <NavigationAccordion
            options={route_components}
            label="@arkyn/components"
            to="/v1/components"
          />
        </NavigationMenu>
        <Outlet />
      </LayoutContent>
      <LayoutFooter />
    </>
  );
}
