import React from "react";
import { createHashRouter } from "react-router-dom";
const PageList = React.lazy(() => import('../views/PageList/index'))
const PageDetail = React.lazy(() => import('../views/PageDetail/index'))
export interface RouteItem {
  path: string;
  Component: React.ComponentType;
}
const router = createHashRouter([
  {
    path: '/',
    Component: PageDetail
  },
  {
    path: '/list',
    Component: PageList
  },
  {
    path: '/detail',
    Component: PageDetail
  }
])

export { router };
