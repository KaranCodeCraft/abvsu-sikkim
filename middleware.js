import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function Middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const { pathname } = req.nextUrl;

  const protectedPaths = ["", "/dashboard"];

  const isProtected = protectedPaths.includes(pathname);

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}