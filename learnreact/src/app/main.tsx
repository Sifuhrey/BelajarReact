/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Global.css";
const HomePage = lazy(() => import("../pages/HomePage"));
const StatePage = lazy(() => import("../pages/StatePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const PropsPage = lazy(() => import("../pages/PropsPage"));
const FormPage = lazy(() => import("../pages/FormPage"));
const HookPage = lazy(() => import("../pages/HookPage"));
const MemoPage = lazy(() => import("../pages/MemoPage"));
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense fallback=
      {
      <div className="flex items-center justify-center h-screen gap-4 bg-blue-300">
          <p className=" text-3xl">Loading page…</p>
        <div className="w-8 h-8 border-4 border-blue-500
                        border-t-transparent rounded-full 
                        animate-spin">
        </div>
      </div>

      }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/props" element={<PropsPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/hook" element={<HookPage />} />
        <Route path="/memo" element={<MemoPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>,
);
