import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { RouteFallback } from "lib/components";

const Blog = React.lazy(() => import("Blog"));
const Services = React.lazy(() => import("Services"));

const RedirectToBlog = () => <Redirect to="/blog" />;

export const routes = {
  BLOG: {
    path: "/blog",
    exact: true,
    Component: Blog,
  },
  SERVICES: {
    path: "/services",
    exact: true,
    Component: Services,
  },
  ROOT: {
    path: "/",
    exact: true,
    Component: RedirectToBlog,
  },
};

export const Routes = () => {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Switch>
        {Object.values(routes).map((r, i) => (
          <Route
            key={i}
            path={r.path}
            exact={r.exact}
            component={r.Component}
          />
        ))}
      </Switch>
    </Suspense>
  );
};
