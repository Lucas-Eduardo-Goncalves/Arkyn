import { Outlet } from "@remix-run/react";

import { LayoutContent } from "./components/LayoutContent";
import { LayoutFooter } from "./components/LayoutFooter";
import { LayoutHeader } from "./components/LayoutHeader";
import { NavigationAccordion } from "./components/NavigationAccordion";
import { NavigationLink } from "./components/NavigationLink";
import { NavigationMenu } from "./components/NavigationMenu";
import { NavigationTitle } from "./components/NavigationTitle";

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
