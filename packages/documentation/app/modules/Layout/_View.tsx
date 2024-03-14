import { Outlet } from "@remix-run/react";

import { LayoutContent } from "./components/LayoutContent";
import { LayoutFooter } from "./components/LayoutFooter";
import { LayoutHeader } from "./components/LayoutHeader";
import { NavigationLink } from "./components/NavigationLink";
import { NavigationMenu } from "./components/NavigationMenu";
import { NavigationAccordion } from "./components/NavigationAccordion";
import { NavigationTitle } from "./components/NavigationTitle";

export function View() {
  return (
    <>
      <LayoutHeader />

      <LayoutContent>
        <NavigationMenu>
          <NavigationLink to="/v1/doc/introduction" label="Introdução" />
          <NavigationLink to="/v1/doc/get-started" label="Começo Rápido" />

          <NavigationTitle label="Pacotes" />

          <NavigationAccordion label="@arkyn/components" to="/v1/components">
            <NavigationLink to="/v1/components/badge" label="Badge" />
            <NavigationLink to="/v1/components/button" label="Button" />
            <NavigationLink to="/v1/components/divider" label="Divider" />
            <NavigationLink
              to="/v1/components/icon-button"
              label="IconButton"
            />
            <NavigationLink to="/v1/components/input" label="Input" />
            <NavigationLink to="/v1/components/modal" label="Modal" />
            <NavigationLink to="/v1/components/Tooltip" label="Tooltip" />
          </NavigationAccordion>

          <NavigationAccordion label="@arkyn/types" to="/v1/types">
            <NavigationLink to="/v1/types/badge" label="BadgeProps" />
            <NavigationLink to="/v1/types/button" label="ButtonProps" />
            <NavigationLink to="/v1/types/divider" label="DividerProps" />
            <NavigationLink
              to="/v1/types/icon-button"
              label="IconButtonProps"
            />
            <NavigationLink to="/v1/types/input" label="InputProps" />
            <NavigationLink to="/v1/types/modal" label="ModalProps" />
            <NavigationLink to="/v1/types/Tooltip" label="TooltipProps" />
          </NavigationAccordion>
        </NavigationMenu>
        <Outlet />
      </LayoutContent>
      <LayoutFooter />
    </>
  );
}
