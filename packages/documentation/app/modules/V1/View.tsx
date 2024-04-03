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

function View() {
  return (
    <>
      <LayoutHeader />
      <LayoutContent>
        <NavigationMenu>
          <NavigationLink to="/v1/doc/introduction" label="Introdução" />
          <NavigationLink to="/v1/doc/get-started" label="Começo Rápido" />
          <NavigationTitle label="Pacotes" />

          <NavigationAccordion label="@arkyn/api" to="/v1/api" options={[]} />
          <NavigationAccordion
            label="@arkyn/components"
            to="/v1/components"
            options={[
              { to: "/v1/components/badge", label: "Badge" },
              { to: "/v1/components/button", label: "Button" },
              { to: "/v1/components/icon-button", label: "IconButton" },
              { to: "/v1/components/input", label: "Input" },
            ]}
          />
          <NavigationAccordion
            label="@arkyn/hooks"
            to="/v1/hooks"
            options={[]}
          />
          <NavigationAccordion
            label="@arkyn/utils"
            to="/v1/utils"
            options={[]}
          />
          <NavigationAccordion
            label="@arkyn/types"
            to="/v1/types"
            options={[]}
          />
        </NavigationMenu>
        <Outlet />
      </LayoutContent>
      <LayoutFooter />
    </>
  );
}

export { View };
