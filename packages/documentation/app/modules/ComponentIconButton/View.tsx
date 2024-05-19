import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { SquareMousePointer, TextCursorInput } from "lucide-react";

import {
  Container,
  NavigationButton,
  NavigationContainer,
  SubMenu,
  SubMenuLink,
} from "~/components";

import {
  Api,
  ImportComponent,
  Introduction,
  Label,
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
          <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
          <BreadcrumbLink to="/v1/components">@arkyn/components</BreadcrumbLink>
          <BreadcrumbLink to="/v1/components/icon-button">
            IconButton
          </BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportComponent />
        <Label />

        <Use />
        <Size />
        <Variant />
        <Schemes />
        <Loading />

        <Api />
      </Container>

      <SubMenu>
        <SubMenuLink id="iconbutton">IconButton</SubMenuLink>
        <SubMenuLink id="import">Import</SubMenuLink>
        <SubMenuLink id="aria-label">Aria label</SubMenuLink>
        <SubMenuLink id="how-to-use">How to use</SubMenuLink>
        <SubMenu>
          <SubMenuLink id="sizes">Sizes</SubMenuLink>
          <SubMenuLink id="variants">Variants</SubMenuLink>
          <SubMenuLink id="color-scheme">Color scheme</SubMenuLink>
          <SubMenuLink id="loading">Loading</SubMenuLink>
        </SubMenu>
        <SubMenuLink id="api">Api</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
