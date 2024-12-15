import type { RouteConfig } from "@react-router/dev/routes";
import { remixConfigRoutes } from "@react-router/remix-config-routes-adapter";
import { flatRoutes } from "remix-flat-routes";

export default remixConfigRoutes((defineRoutes) => {
  return flatRoutes("routes", defineRoutes);
}) satisfies RouteConfig;
