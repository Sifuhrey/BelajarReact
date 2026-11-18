import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Global.css";
import HomePage from "../pages/HomePage";
import StatePage from "../pages/StatePage";
import AboutPage from "../pages/AboutPage";
import PropsPage from "../pages/PropsPage";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/state" element={<StatePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/props" element={<PropsPage />} />
    </Routes>
  </BrowserRouter>,
);
