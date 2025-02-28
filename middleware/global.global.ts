// middleware/global.global.ts
import { storeToRefs } from "pinia";
export default defineNuxtRouteMiddleware(async (to) => {
  // Set page title
  const config = useRuntimeConfig();
  const appName = config.public.appName;
  useHead({
    title: to.meta.title ? `${to.meta.title} - ${appName}` : appName,
  });

  const auth = useAuthStore();
  const { authenticated, getRoles, getPermission } = storeToRefs(auth);
  if (process.client) {
    await nextTick();
  }
  // Auth routes with 'auth/' prefix
  const authRoutes = ["auth/login", "auth/register", "auth/forget-password", "auth/reset-password"];

  // Check if user is authenticated and trying to access auth routes
  if (authRoutes.includes(to.path.slice(1)) && authenticated.value) {
    return navigateTo("/dashboard");
  }

  // Check if route requires authentication
  const requireAuth = to.meta.authenticated;
  if (requireAuth && !authenticated.value) {
    //return navigateTo("/auth/login");
  }

  // Check role and permission access
  if (!canAccess(to, getRoles.value, getPermission.value)) {
    return navigateTo("/401");
  }
});

function canAccess(route: any, roles: string[], permissions: string[]): boolean {
  if (route.meta && (route.meta.roles || route.meta.permissions)) {
    let hasRole = false;
    let hasPermission = false;

    if (roles.includes("Super Admin")) {
      return true;
    }

    // Check if user has required roles
    if (route.meta.roles) {
      hasRole = roles.some((role) => route.meta.roles.includes(role));
    }

    // Check if user has required permissions
    if (route.meta.permissions) {
      hasPermission = permissions.some((permission) => route.meta.permissions.includes(permission));
    }

    // Access is granted if the user has either role or permission
    return hasRole || hasPermission;
  }

  // If no specific roles or permissions are required, allow access
  return true;
}
