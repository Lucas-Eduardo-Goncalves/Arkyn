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
  throw new Error("Not implemented");

  return (
    <>
      <LayoutHeader />
      <LayoutContent>
        <NavigationMenu>
          <NavigationLink to="/v1/doc/introduction" label="Introduction" />
          {/* <NavigationLink to="/v1/doc/get-started" label="Get Started" /> */}

          <NavigationTitle label="Components" />
          <NavigationLink to="/v1/components/badge" label="Badge" />
          <NavigationLink to="/v1/components/button" label="Button" />
          <NavigationLink to="/v1/components/checkbox" label="Checkbox" />
          <NavigationLink to="/v1/components/icon-button" label="IconButton" />
          {/* <NavigationLink to="/v1/components/input" label="Input" /> */}
          {/* <NavigationLink to="/v1/components/select" label="Select" /> */}

          <NavigationTitle label="Server" />
          <NavigationLink to="/v1/server/bad-request" label="badRequest" />
          <NavigationLink to="/v1/server/form-parse" label="formParse" />
          <NavigationLink
            to="/v1/server/get-scoped-params"
            label="getScopedParams"
          />

          <NavigationTitle label="Shared" />
          <NavigationLink
            to="/v1/shared/calculate-card-installment"
            label="calculateCardInstallment"
          />
          <NavigationLink
            to="/v1/shared/currency-format"
            label="currencyFormat"
          />
          <NavigationLink
            to="/v1/shared/generate-color-by-string"
            label="generateColorByString"
          />
          <NavigationLink to="/v1/shared/generate-slug" label="generateSlug" />
          <NavigationLink to="/v1/shared/regex" label="regex" />
        </NavigationMenu>
        <Outlet />
      </LayoutContent>
      <LayoutFooter />
    </>
  );
}

export { View };
