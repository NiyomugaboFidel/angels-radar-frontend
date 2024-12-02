import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || "";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("ANGELS_RADAR_JWT")?.value;
  // console.log({token});

  if (!token) {
    return redirectToSignIn(request);
  }

  try {
    const secret = new TextEncoder().encode(secretKey);
    const { payload } = await jwtVerify(token, secret);
  

    const role = payload.role || request.cookies.get("role")?.value;
    // console.log({role})
    if (role !== "investor" && role !== "owner") {
      return NextResponse.redirect(new URL("/user/account/role", request.url));
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
  matcher: ["/dashboard/:path*", "/", "/user/:path*" ,], 
};
