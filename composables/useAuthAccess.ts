/**
 * A composable that provides direct role and permission checks without using `.value`.
 */
export const useAuthAccess = () => {
  const authStore = useAuthStore();

  /**
   * Check if the user has at least one of the required roles.
   * @param roles - A role or list of roles.
   * @returns boolean
   */
  const hasRole = (roles: string[] | string): boolean => {
    const userRoles = authStore.roles as string[];

    if (!Array.isArray(roles)) roles = [roles];
    return roles.some((role) => userRoles.includes(role));
  };

  /**
   * Check if the user has at least one of the required permissions.
   * @param permissions - A permission or list of permissions.
   * @returns boolean
   */
  const hasPermission = (permissions: string[] | string): boolean => {
    const userPermissions = authStore.permissions as string[];

    if (!Array.isArray(permissions)) permissions = [permissions];
    return permissions.some((permission) => userPermissions.includes(permission));
  };

  /**
   * Check if the user has any of the given roles or permissions.
   * @param roles - List of roles.
   * @param permissions - List of permissions.
   * @returns boolean
   */
  const hasAnyRoleOrPermission = (roles: string[] | string = [], permissions: string[] | string = []): boolean => {
    return hasRole(roles) || hasPermission(permissions);
  };

  /**
   * Check if the user has all the required roles.
   * @param roles - A role or list of roles.
   * @returns boolean
   */
  const hasAllRoles = (roles: string[] | string): boolean => {
    if (!Array.isArray(roles)) roles = [roles];
    return roles.every((role) => authStore.roles.includes(role));
  };

  /**
   * Check if the user has all the required permissions.
   * @param permissions - A permission or list of permissions.
   * @returns boolean
   */
  const hasAllPermissions = (permissions: string[] | string): boolean => {
    if (!Array.isArray(permissions)) permissions = [permissions];
    return permissions.every((permission) => authStore.permissions.includes(permission));
  };

  return {
    hasRole,
    hasPermission,
    hasAnyRoleOrPermission,
    hasAllRoles,
    hasAllPermissions,
  };
};
