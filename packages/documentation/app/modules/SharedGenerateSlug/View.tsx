import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";

import { Container, SubMenu, SubMenuLink } from "~/components";
import { ImportUtil, Introduction, Use } from "./components";

function View() {
  return (
    <>
      <Container>
        <Breadcrumb>
          <BreadcrumbLink to="/">Documentation</BreadcrumbLink>
          <BreadcrumbLink to="/v1/shared">@arkyn/shared</BreadcrumbLink>
          <BreadcrumbLink to="/v1/shared/generate-slug">
            generateSlug
          </BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportUtil />
        <Use />
      </Container>

      <SubMenu>
        <SubMenuLink id="generateslug">Introduction</SubMenuLink>
        <SubMenuLink id="import">Import</SubMenuLink>
        <SubMenuLink id="how-to-use">How to use</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
