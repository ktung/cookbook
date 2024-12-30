import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  ...prefix("cookbook", [
    index("routes/home.tsx"),
    route("*", "routes/home.tsx", { id: "fallback" }),
  ])
] satisfies RouteConfig;
