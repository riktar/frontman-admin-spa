import React from "react";
import Home from "pages/Home";
import Settings from "pages/Settings";
import Http404 from "pages/Http404";
import jsonRoutes from "./router.json";

const Component = {
    Home,
    Settings,
    Http404,
}

const routes = jsonRoutes.map((x) => ({
  ...x,
  component: React.createElement(Component[x.key], {})
}));


export { routes };
