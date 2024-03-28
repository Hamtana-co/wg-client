import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {

  const token = cookies().get("token");
  // if (!token?.value) return NextResponse.redirect(new URL("/auth", req.url));

  const headers = new Headers(req.headers);
  headers.set("x-pathname", req.nextUrl.pathname);

  return NextResponse.next({ headers });
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico|auth).*)",
};
