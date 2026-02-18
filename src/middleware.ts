import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "/cart",
  "/checkout",
  "/profile",
  "/orders",
  "/wishlist",
  "/settings",
  "/address",
];

const authRoutes = ["/login", "/signup", "/forget-password", "/rest-password"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value || null;
  const isAuthenticated = !!token;

  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname.startsWith(route) || pathname === `${route}/`,
  );

  const isAuthRoute = authRoutes.some(
    (route) => pathname.startsWith(route) || pathname === `${route}/`,
  );

  if (isProtectedRoute && !isAuthenticated) {
    const url = new URL("/login", request.url);
    return NextResponse.redirect(url);
  }

  if (isAuthRoute && isAuthenticated) {
    const url = new URL("/", request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/cart/:path*",
    "/checkout/:path*",
    "/orders/:path*",
    "/wishlist/:path*",
    "/settings/:path*",
    "/address/:path*",
    "/login",
    "/signup",
    "/forget-password",
    "/rest-password",
  ],
};
