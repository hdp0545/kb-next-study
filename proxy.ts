import { NextResponse } from "next/server"

export default function Proxy() {
  return NextResponse.next()
}

export const config = {
  matcher: ["/movies/:path*"],
}