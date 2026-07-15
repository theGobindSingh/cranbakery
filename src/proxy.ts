import { type NextRequest, NextResponse } from "next/server";

export const proxy = (request: NextRequest) => {
  const theme = request.nextUrl.searchParams.get("theme");

  if (theme !== "light" && theme !== "dark") {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  response.cookies.set("theme", theme, { path: "/" });
  return response;
};

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
