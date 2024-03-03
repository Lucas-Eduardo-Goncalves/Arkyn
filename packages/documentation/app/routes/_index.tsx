import { Link } from "@remix-run/react";

export default function () {
  return (
    <main>
      <h1>Arkyn</h1>
      <Link to="/components/button">Button</Link>
      <Link to="/components/icon-button">IconButton</Link>
      <Link to="/components/input">Input</Link>
    </main>
  );
}
