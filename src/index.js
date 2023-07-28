// index.js
import { createRoot } from "react-dom/client"; // Update the import statement
import Keycloak from "keycloak-js";
import React from "react";
import App from "./App.js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  realm: "ashahane",
  clientId: "myclient",
});

const rootElement = document.getElementById("root");

keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
  if (authenticated) {
    createRoot(rootElement).render(<App />);
  }
}).catch((error) => {
  console.error("Error during Keycloak initialization:", error);
});

