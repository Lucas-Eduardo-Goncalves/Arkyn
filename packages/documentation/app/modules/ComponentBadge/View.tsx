import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Container, SubMenu, SubMenuLink } from "~/components";

import {
  Api,
  BadgeWithIcon,
  ImportComponent,
  Introduction,
  Schemes,
  Size,
  Use,
  Variant,
} from "./components";

function View() {
  return (
    <>
      <Container>
        <Breadcrumb>
          <BreadcrumbLink to="/">Documentation</BreadcrumbLink>
          <BreadcrumbLink to="/v1/components">@arkyn/components</BreadcrumbLink>
          <BreadcrumbLink to="/v1/components/badge">Badge</BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportComponent />

        <Use />
        <Size />
        <Variant />
        <Schemes />
        <BadgeWithIcon />

        <Api />
      </Container>

      <SubMenu>
        <SubMenuLink id="badge">Introduction</SubMenuLink>
        <SubMenuLink id="import">Import</SubMenuLink>
        <SubMenuLink id="how-to-use">How to use</SubMenuLink>
        <SubMenu>
          <SubMenuLink id="sizes">Sizes</SubMenuLink>
          <SubMenuLink id="variants">Variants</SubMenuLink>
          <SubMenuLink id="color-scheme">Color scheme</SubMenuLink>
          <SubMenuLink id="badge-with-icon">Badge with icon</SubMenuLink>
        </SubMenu>
        <SubMenuLink id="api">Api</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
