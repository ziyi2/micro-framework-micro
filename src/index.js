// packages/react-app/src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let root;

if (!window.__POWERED_BY_FRAMEWORK__) {
  root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export async function bootstrap() {}

export async function mount(props) {
  root = ReactDOM.createRoot(props.container.querySelector("#root"));
  root.render(<App />);
}

export async function unmount() {
  root && root.unmount();
}
