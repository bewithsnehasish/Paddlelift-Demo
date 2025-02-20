import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if maintenance mode is active
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

  // Maintenance page path
  const maintenancePage = "/maintenance";

  // Current request path
  const path = request.nextUrl.pathname;

  // Whitelist paths that can always be accessed
  const whitelistedPaths = ["/maintenance"];

  // If maintenance mode is off, proceed normally
  if (!isMaintenanceMode) {
    return NextResponse.next();
  }

  // If maintenance mode is on, handle routing
  // Allow whitelisted paths
  if (
    whitelistedPaths.some((whitelistedPath) => path.startsWith(whitelistedPath))
  ) {
    return NextResponse.next();
  }

  // Allow static files (with extensions)
  if (path.includes(".")) {
    return NextResponse.next();
  }

  // Redirect all other routes to maintenance page
  return NextResponse.rewrite(new URL(maintenancePage, request.url));
}

// Matcher to apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
