//src/middleware.ts
// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define a matcher for the home page, which will remain publicly accessible
const isPublicRoute = createRouteMatcher(['/']);

// Define tenant and tenant admin routes as per Clerk's suggestion
const isTenantRoute = createRouteMatcher(['/organization-selector(.*)', '/orgid/(.*)']);
const isTenantAdminRoute = createRouteMatcher(['/orgId/(.*)/memberships', '/orgId/(.*)/domain']);

export default clerkMiddleware((auth, req) => {
  // Allow public access to the home page
  if (isPublicRoute(req)) {
    return; // No protection required for the home page
  }

  // Restrict admin routes to users with specific permissions
  if (isTenantAdminRoute(req)) {
    auth().protect((has) => {
      return (
        has({ permission: 'org:sys_memberships:manage' }) ||
        has({ permission: 'org:sys_domains_manage' })
      );
    });
  }

  // Restrict organization routes to signed-in users
  if (isTenantRoute(req)) {
    auth().protect();
  } else {
    // Protect all other routes (except the home page)
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
