import { Link, Outlet } from "@remix-run/react";

export default function () {
  return (
    <main>
      <h2>Components</h2>
      <Link to="/">Voltar</Link>
      <Outlet />
    </main>
  );
}
