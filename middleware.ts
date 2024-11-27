import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import cookie from "cookie";
const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || "";

export async function middleware(request: NextRequest) {
  const cookies = request.headers.get("cookie")
    ? cookie.parse(request.headers.get("cookie")!)
    : {};
  const token = cookies.ANGELS_RADAR_JWT

//   console.log(token);

  if (!token) {
    return redirectToSignIn(request);
  }

  try {
    const secret = new TextEncoder().encode(secretKey);
    const { payload } = await jwtVerify(token, secret);

    const role = payload.role || cookies.role;
    // console.log({role})

    if (role !== "investor" && role !== "owner") {
      return NextResponse.redirect(new URL("/auth/user", request.url));
    }
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return redirectToSignIn(request);
  }

  return NextResponse.next();
}

function redirectToSignIn(request: NextRequest): NextResponse {
  return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*","/"], 
};
