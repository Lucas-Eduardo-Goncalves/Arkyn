import { ModalProvider } from "@arkyn/components";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "remix-development-tools/client.css";
import "~/config/styles.css";

type DocumentProps = {
  children: React.ReactNode;
};

function Document({ children }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ModalProvider>{children}</ModalProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function View() {
  return <Outlet />;
}

export { View, Document };
