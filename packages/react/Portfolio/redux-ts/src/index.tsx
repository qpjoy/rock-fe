import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, ProviderProps } from "react-redux";
import App from "./components/App";
import { store } from "./state";

const providerProps: ProviderProps = {
  store: store,
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  //   <React.StrictMode>
  <Provider {...providerProps}>
    <App />
  </Provider>
  //   </React.StrictMode>
);
