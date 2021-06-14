import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./router";
import { RecoilRoot } from "recoil";
import App from "components/App";
import Sidebar from "./components/Layout/Sidebar";

import "@material-tailwind/react/tailwind.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App>
        <BrowserRouter>
          <Sidebar />
          <div className="md:ml-64">
            <Switch>
              {routes.map((page) => (
                <Route key={page.key} {...page.props}>
                  {page.component}
                </Route>
              ))}
            </Switch>
          </div>
        </BrowserRouter>
      </App>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
