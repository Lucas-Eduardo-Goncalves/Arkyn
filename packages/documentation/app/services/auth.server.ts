import { createCookieSessionStorage } from "@remix-run/node";

const authStorage = createCookieSessionStorage({
  cookie: {
    name: "remix:user-session",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1B0ok"],
    secure: false,
  },
});

export { authStorage };
