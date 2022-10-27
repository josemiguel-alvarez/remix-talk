import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./tailwind.css"; // CSS

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="prose mx-auto p-4">
        <div className="flex gap-4 mb-4">
          <Link to="/" prefetch="intent">
            Home
          </Link>
          <Link to="/notes" prefetch="intent">
            Notes
          </Link>
          <Link to="/about" prefetch="intent">
            About
          </Link>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
