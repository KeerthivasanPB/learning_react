import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Youtube from "./Youtube.jsx";
import React from "react";

const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "visit google by clicking me"
);

createRoot(document.getElementById("root")).render(reactElement);
