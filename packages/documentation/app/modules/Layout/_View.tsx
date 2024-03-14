import { Outlet } from "@remix-run/react";

import { LayoutContent } from "./components/LayoutContent";
import { LayoutFooter } from "./components/LayoutFooter";
import { LayoutHeader } from "./components/LayoutHeader";
import { NavigationAccordion } from "./components/NavigationAccordion";
import { NavigationLink } from "./components/NavigationLink";
import { NavigationMenu } from "./components/NavigationMenu";
import { NavigationTitle } from "./components/NavigationTitle";

import { route_components, route_types } from "./config/route-list";

export function View() {
  return (
    <>
      <LayoutHeader />
      <LayoutContent>
        <NavigationMenu>
          <NavigationLink to="/doc/introduction" label="Introdução" />
          <NavigationLink to="/doc/get-started" label="Começo Rápido" />

          <NavigationTitle label="Pacotes" />
          <NavigationAccordion
            options={route_components}
            label="@arkyn/components"
            to="/v1/components"
          />
          <NavigationAccordion
            options={route_types}
            label="@arkyn/types"
            to="/v1/types"
          />
        </NavigationMenu>

        <Outlet />
      </LayoutContent>
      <LayoutFooter />
    </>
  );
}
