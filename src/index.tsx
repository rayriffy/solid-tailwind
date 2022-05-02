/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import App from "./app";

import "./styles/tailwind.css";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
