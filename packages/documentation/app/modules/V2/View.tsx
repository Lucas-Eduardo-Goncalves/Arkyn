import { Outlet } from "@remix-run/react";
import {
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  NavigationLink,
  NavigationMenu,
} from "./components";

function View() {
  return (
    <>
      <LayoutHeader />
      <LayoutContent>
        <NavigationMenu>
          <NavigationLink label="Channels" to="/v2/channels" />
        </NavigationMenu>
        <Outlet />
      </LayoutContent>
      <LayoutFooter />
    </>
  );
}

export { View };
