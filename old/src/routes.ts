import { type RouteConfig, index, prefix, route } from '@react-router/dev/routes';

export default [
  ...prefix('/cookbook/v1', [
    index('routes/home.tsx'),
    // route('/*', 'routes/home.tsx'),
    // route('*', 'routes/home.tsx')
  ])
] satisfies RouteConfig;
