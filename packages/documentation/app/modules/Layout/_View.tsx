import { Outlet } from "@remix-run/react";

import { LayoutHeader } from "./components/LayoutHeader";
import { LayoutContent } from "./components/LayoutContent";
import { NavigationMenu } from "./components/NavigationMenu";
import { NavigationLink } from "./components/NavigationLink";
import { NavigationTitle } from "./components/NavigationTitle";

export function View() {
  return (
    <div>
      <LayoutHeader />

      <LayoutContent>
        <NavigationMenu>
          <NavigationLink to="/v1/get-started" label="Get Started" />

          <NavigationTitle label="Components" />
          <NavigationLink to="/v1/components/badge" label="Badge" />
          <NavigationLink to="/v1/components/button" label="Button" />
          <NavigationLink to="/v1/components/divider" label="Divider" />
          <NavigationLink to="/v1/components/icon-button" label="IconButton" />
          <NavigationLink to="/v1/components/input" label="Input" />
          <NavigationLink to="/v1/components/modal" label="Modal" />
          <NavigationLink to="/v1/components/tooltip" label="Tooltip" />
        </NavigationMenu>

        <div>
          <Outlet />
        </div>
      </LayoutContent>
    </div>
  );
}
