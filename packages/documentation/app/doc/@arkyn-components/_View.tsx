import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Badge, Sparkles } from "lucide-react";

import { Container } from "~/components/Container";
import { Fence } from "~/components/Fence";
import { NavigationButton } from "~/components/NavigationButton";
import { NavigationContainer } from "~/components/NavigationContainer";
import { Paragraph } from "~/components/Paragraph";
import { Title } from "~/components/Title";

function View() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
        <BreadcrumbLink to="/v1/components">@arkyn/components</BreadcrumbLink>
      </Breadcrumb>

      <Title as="h1">@arkyn/components</Title>

      <Paragraph>
        A biblioteca @arkyn/components é uma coleção de componentes React
        desenvolvidos com flexibilidade em mente, permitindo uma fácil
        integração e personalização em projetos React e RemixJS. Com uma
        variedade de componentes prontos para uso, ela visa simplificar o
        desenvolvimento de interfaces de usuário modernas e atraentes.
      </Paragraph>

      <Paragraph>
        Para começar a usar os componentes da biblioteca, siga estas etapas
        simples de configuração:
      </Paragraph>

      <Title as="h3">Instalação de Pacotes</Title>

      <Paragraph>
        Certifique-se de ter os seguintes pacotes instalados em seu projeto:{" "}
        <br />
        <code>lucide-react</code>: Fornece ícones escaláveis e personalizáveis
        para seus componentes.
        <br />
        <code>framer-motion</code>: Biblioteca para adicionar animações fluidas
        e interativas.
        <br />
        <code>react e react-dom</code>: Bibliotecas essenciais para
        desenvolvimento React.
        <br />
        <code>@arkyn/types</code>: Tipos TypeScript para os componentes da
        biblioteca.
        <br />
        <code>@remix-run/react</code>: Se estiver usando RemixJS para
        renderização do lado do servidor.
        <br />
      </Paragraph>

      <Paragraph>
        Você pode instalar esses pacotes usando npm, yarn ou bun (recomendado):
      </Paragraph>

      <Fence type="bash">
        bun i lucide-react framer-motion react react-dom @arkyn/types
        @remix-run/react
      </Fence>

      <Title as="h3">Configuração de Variáveis CSS Ambiente</Title>

      <Paragraph>
        Adicione as seguintes variáveis CSS ao seu ambiente para personalizar
        esquemas de cores:
        <br />
        (essas variáveis podem ser alteradas conforme necessário)
      </Paragraph>

      <Fence type="css">
        {`:root {
  --primary-50: #f0f9ff;
  --primary-100: #e0f2fe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;
  --primary-950: #172554;
}

:root {
  --secondary-50: #fafafa;
  --secondary-100: #f4f4f5;
  --secondary-200: #e4e4e7;
  --secondary-300: #d4d4d8;
  --secondary-400: #a1a1aa;
  --secondary-500: #71717a;
  --secondary-600: #52525b;
  --secondary-700: #3f3f46;
  --secondary-800: #27272a;
  --secondary-900: #18181b;
  --secondary-950: #09090b;
}

:root {
  --danger-50: #fff1f2;
  --danger-100: #ffe4e6;
  --danger-200: #fecdd3;
  --danger-300: #fda4af;
  --danger-400: #fb7185;
  --danger-500: #f43f5e;
  --danger-600: #e11d48;
  --danger-700: #be123c;
  --danger-800: #9f1239;
  --danger-900: #881337;
  --danger-950: #4c0519;
}

:root {
  --success-50: #ecfdf5;
  --success-100: #d1fae5;
  --success-200: #a7f3d0;
  --success-300: #6ee7b7;
  --success-400: #34d399;
  --success-500: #10b981;
  --success-600: #059669;
  --success-700: #047857;
  --success-800: #065f46;
  --success-900: #064e3b;
  --success-950: #022c22;
}

:root {
  --warning-50: #fff7ed;
  --warning-100: #ffedd5;
  --warning-200: #fed7aa;
  --warning-300: #fdba74;
  --warning-400: #fb923c;
  --warning-500: #f97316;
  --warning-600: #ea580c;
  --warning-700: #c2410c;
  --warning-800: #9a3412;
  --warning-900: #7c2d12;
  --warning-950: #431407;
}

:root {
  --info-50: #f0f9ff;
  --info-100: #e0f2fe;
  --info-200: #bae6fd;
  --info-300: #7dd3fc;
  --info-400: #38bdf8;
  --info-500: #0ea5e9;
  --info-600: #0284c7;
  --info-700: #0369a1;
  --info-800: #075985;
  --info-900: #0c4a6e;
  --info-950: #082f49;
}
`}
      </Fence>

      <NavigationContainer>
        <NavigationButton
          icon={Sparkles}
          label="Começo Rápido"
          to="/v1/doc/get-started"
        />
        <NavigationButton
          icon={Badge}
          label="Badge"
          to="/v1/components/badge"
        />
      </NavigationContainer>
    </Container>
  );
}

export { View };
