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

        <NavigationContainer>
          <NavigationButton
            icon={SquareMousePointer}
            label="Button"
            to="/v1/components/button"
          />
          <NavigationButton
            icon={TextCursorInput}
            label="Input"
            to="/v1/components/input"
          />
        </NavigationContainer>
      </Container>

      <SubMenu>
        <SubMenuLink id="iconbutton">Botão</SubMenuLink>
        <SubMenuLink id="importar">Importar</SubMenuLink>
        <SubMenuLink id="etiqueta">Etiqueta</SubMenuLink>
        <SubMenuLink id="uso">Uso</SubMenuLink>
        <SubMenu>
          <SubMenuLink id="tamanhos">Tamanhos</SubMenuLink>
          <SubMenuLink id="variantes">Variantes</SubMenuLink>
          <SubMenuLink id="esquema-de-cores">Esquema de cores</SubMenuLink>
          <SubMenuLink id="carregamento">Carregamento</SubMenuLink>
        </SubMenu>
        <SubMenuLink id="api">Api</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
