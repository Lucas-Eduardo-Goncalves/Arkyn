import { Outlet } from "@remix-run/react";

import { LayoutContent } from "./components/LayoutContent";
import { LayoutFooter } from "./components/LayoutFooter";
import { LayoutHeader } from "./components/LayoutHeader";
import { NavigationLink } from "./components/NavigationLink";
import { NavigationMenu } from "./components/NavigationMenu";
import { NavigationTitle } from "./components/NavigationTitle";

export function View() {
  return (
    <>
      <LayoutHeader />

      <LayoutContent>
        <NavigationMenu>
          <NavigationLink to="/v1/doc/introduction" label="Introdução" />
          <NavigationLink to="/v1/doc/get-started" label="Começo Rápido" />

          <NavigationTitle label="Componentes" />
          <NavigationLink to="/v1/components/badge" label="Badge" />
          <NavigationLink to="/v1/components/button" label="Button" />
          <NavigationLink to="/v1/components/divider" label="Divider" />
          <NavigationLink to="/v1/components/icon-button" label="IconButton" />
          <NavigationLink to="/v1/components/input" label="Input" />
          <NavigationLink to="/v1/components/modal" label="Modal" />
          <NavigationLink to="/v1/components/tooltip" label="Tooltip" />
        </NavigationMenu>

        <Outlet />
      </LayoutContent>

      <LayoutFooter />
    </>
  );
}
