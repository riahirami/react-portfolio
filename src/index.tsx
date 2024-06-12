import React, { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const mainApp = document.getElementById("root");
if (!mainApp) {
  throw new Error("The element #root wasn't found");
} else {
  const root = createRoot(mainApp);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
