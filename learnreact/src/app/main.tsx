import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../Global.css";
import HomePage from "../pages/HomePage";
import StatePage from "../pages/StatePage";
import AboutPage from "../pages/AboutPage";
import { lazy, Suspense } from "react";

const PropsPage = lazy(() => import("../pages/PropsPage"));

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/state" element={<StatePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/props"
        element={
          <Suspense fallback={<p>Loading props page...</p>}>
            <PropsPage />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>,
);
