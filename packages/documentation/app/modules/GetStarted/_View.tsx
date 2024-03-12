import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";

import { Container } from "~/components/Container";
import { Fence } from "~/components/Fence";
import { Paragraph } from "~/components/Paragraph";
import { Title } from "~/components/Title";

function View() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
        <BreadcrumbLink to="/v1/doc/get-started">Começo Rápido</BreadcrumbLink>
      </Breadcrumb>

      <Title as="h1">Começo Rápido</Title>

      <Paragraph>
        Para começar, é necessário fazer a instalação da biblioteca e suas
        dependências de pares. A biblioteca não trará nada consigo, será
        necessário uma instalação manual.
      </Paragraph>

      <Paragraph>
        Instale os pacotes:
        <code className="area">
          bun i @arkyn/components @arkyn/utils @arkyn/types @arkyn/api
          @arkyn/hooks
        </code>
      </Paragraph>

      <Paragraph>
        A instalação abaixo será definida <strong>por pacotes</strong>, isso
        implica que os pacotes serão repetidos em suas instalações, é
        recomendado antes de fazer qualquer instalação, conferir se vocẽ já não
        tem o pacote pré instalado em seu projeto. Sempre confira seu
        package.json antes de instalar qualquer coisa! Para o pacote{" "}
        <code>@arkyn/utils</code> nenhuma instalação será necessaria.
      </Paragraph>

      <Paragraph>
        <code>@arkyn/api</code>
        <code className="area">
          bun i @remix-run/node @remix-run/server-runtime
        </code>
      </Paragraph>

      <Paragraph>
        <code>@arkyn/components</code>
        <code className="area">
          bun i lucide-react framer-motion react react-dom
        </code>
      </Paragraph>

      <Paragraph>
        <code>@arkyn/hooks</code>
        <code className="area">bun i react</code>
      </Paragraph>

      <Paragraph>
        <code>@arkyn/types</code>
        <code className="area">bun i lucide-react react react-dom</code>
      </Paragraph>

      <Paragraph>
        Após a instalação dos pacotes, é necessário adicionar um arquivo css em
        qualquer lugar do seu projeto, e adiciona-lo a sua rota{" "}
        <code>root</code>: <br />
      </Paragraph>

      <Fence>
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
    </Container>
  );
}

export { View };
