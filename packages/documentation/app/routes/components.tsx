import { Link, Outlet } from "@remix-run/react";

export default function () {
  return (
    <main>
      <h1>Components</h1>
      <Link to="/">Voltar</Link>
      <hr style={{ margin: "16px 0" }} />
      <Outlet />
    </main>
  );
}
