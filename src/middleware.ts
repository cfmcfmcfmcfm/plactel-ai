// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USERNAME = process.env.BASIC_AUTH_USER || "admin";
const PASSWORD = process.env.BASIC_AUTH_PASS || "password";

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pass] = atob(authValue).split(":");

    if (user === USERNAME && pass === PASSWORD) {
      return NextResponse.next();
    }
  }

  return new Response("Authentication Required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: ["/", "/((?!_next|favicon.ico|api/health).*)"], // Exclude Next.js internals
};
