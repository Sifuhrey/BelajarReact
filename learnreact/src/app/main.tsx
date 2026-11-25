import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Global.css";
import HomePage from "../pages/HomePage";
import StatePage from "../pages/StatePage";
import AboutPage from "../pages/AboutPage";
import PropsPage from "../pages/PropsPage";
import FormPage from "../pages/FormPage";
import HookPage from "../pages/HookPage";
import MemoPage from "../pages/MemoPage";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/state" element={<StatePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/props" element={<PropsPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/hook" element={<HookPage />} />
      <Route path="/memo" element={<MemoPage />} />
    </Routes>
  </BrowserRouter>,
);
