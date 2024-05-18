import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";

import { Container, SubMenu, SubMenuLink } from "~/components";

import {
  Api,
  ButtonWithIcon,
  ImportComponent,
  Introduction,
  Loading,
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
          <BreadcrumbLink to="/v1/components/button">Button</BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportComponent />

        <Use />
        <Size />
        <Variant />
        <Schemes />
        <ButtonWithIcon />
        <Loading />

        <Api />
      </Container>

      <SubMenu>
        <SubMenuLink id="button">Introduction</SubMenuLink>
        <SubMenuLink id="import">Import</SubMenuLink>
        <SubMenuLink id="how-to-use">Hot to use</SubMenuLink>
        <SubMenu>
          <SubMenuLink id="sizes">Sizes</SubMenuLink>
          <SubMenuLink id="variants">Variants</SubMenuLink>
          <SubMenuLink id="color-scheme">Color scheme</SubMenuLink>
          <SubMenuLink id="button-with-icon">Button with icon</SubMenuLink>
          <SubMenuLink id="loading">Loading</SubMenuLink>
        </SubMenu>
        <SubMenuLink id="api">Api</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
