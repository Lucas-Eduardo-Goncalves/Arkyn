import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";

import { Container, SubMenu, SubMenuLink } from "~/components";
import { Api, ImportComponent, Introduction, Size, Use } from "./components";

function View() {
  return (
    <>
      <Container>
        <Breadcrumb>
          <BreadcrumbLink to="/">Documentation</BreadcrumbLink>
          <BreadcrumbLink to="/v1/components">@arkyn/components</BreadcrumbLink>
          <BreadcrumbLink to="/v1/components/checkbox">Checkbox</BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportComponent />
        <Use />
        <Size />
        <Api />
      </Container>

      <SubMenu>
        <SubMenuLink id="checkbox">Introduction</SubMenuLink>
        <SubMenuLink id="import">Import</SubMenuLink>
        <SubMenuLink id="how-to-use">Hot to use</SubMenuLink>
        <SubMenuLink id="sizes">Sizes</SubMenuLink>
        <SubMenuLink id="api">Api</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
