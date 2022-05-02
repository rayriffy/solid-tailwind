import { lazy } from 'solid-js'
import type { RouteDefinition } from 'solid-app-router'

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: await import('./pages/index').then(o => o.default),
  },
  {
    path: '/fetch',
    component: lazy(() => import('./pages/fetch')),
    data: await import('./pages/fetch.data').then(o => o.default),
  },
  {
    path: '/dynamic/:dynamicId',
    component: lazy(() => import('./pages/dynamic/[dynamicId]')),
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
]
