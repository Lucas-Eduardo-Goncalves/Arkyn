import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Badge, SquareMousePointer } from "lucide-react";

import {
  Container,
  NavigationButton,
  NavigationContainer,
  SubMenu,
  SubMenuLink,
} from "~/components";

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
          <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
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

        <NavigationContainer>
          <NavigationButton
            icon={Badge}
            label="Badge"
            to="/v1/components/badge"
          />
          <NavigationButton
            icon={SquareMousePointer}
            label="IconButton"
            to="/v1/components/icon-button"
          />
        </NavigationContainer>
      </Container>

      <SubMenu>
        <SubMenuLink id="button">Introdução</SubMenuLink>
        <SubMenuLink id="importar">Importar</SubMenuLink>
        <SubMenuLink id="uso">Uso</SubMenuLink>
        <SubMenu>
          <SubMenuLink id="tamanhos">Tamanhos</SubMenuLink>
          <SubMenuLink id="variantes">Variantes</SubMenuLink>
          <SubMenuLink id="esquema-de-cores">Esquema de cores</SubMenuLink>
          <SubMenuLink id="botão-com-icone">Botão com icone</SubMenuLink>
          <SubMenuLink id="carregamento">Carregamento</SubMenuLink>
        </SubMenu>
        <SubMenuLink id="api">Api</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
