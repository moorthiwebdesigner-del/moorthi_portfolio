import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { registerSW } from "virtual:pwa-register";


// PWA Service Worker
registerSW({
  onNeedRefresh() {
    console.log("New content available");
  },

  onOfflineReady() {
    console.log("App ready for offline use");
  },
});


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);