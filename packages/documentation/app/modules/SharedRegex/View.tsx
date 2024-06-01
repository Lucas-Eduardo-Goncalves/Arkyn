import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";

import { Container, SubMenu, SubMenuLink } from "~/components";
import { ImportUtil, Introduction, Options, Use } from "./components";

function View() {
  return (
    <>
      <Container>
        <Breadcrumb>
          <BreadcrumbLink to="/">Documentation</BreadcrumbLink>
          <BreadcrumbLink to="/v1/shared">@arkyn/shared</BreadcrumbLink>
          <BreadcrumbLink to="/v1/shared/regex">regex</BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportUtil />
        <Options />
        <Use />
      </Container>

      <SubMenu>
        <SubMenuLink id="regex">Introduction</SubMenuLink>
        <SubMenuLink id="import">Import</SubMenuLink>
        <SubMenuLink id="options">Regex&apos;s</SubMenuLink>
        <SubMenuLink id="how-to-use">How to use</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
