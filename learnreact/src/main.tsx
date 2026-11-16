import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StatePage from "./StatePage.tsx";
import PropsPage from "./PropsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/state" element={<StatePage />} />
      <Route path="/props" element={<PropsPage />} />
    </Routes>
  </BrowserRouter>,
);
