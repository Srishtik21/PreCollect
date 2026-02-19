import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SiteLayout from "./layout/SiteLayout";
import SiteVisit from "./pages/SiteVisit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          {/* ✅ DEFAULT PAGE */}
          <Route index element={<SiteVisit />} />

          {/* OTHER PAGES */}
          <Route path="site-visit" element={<SiteVisit />} />
        </Route>

        {/* SAFETY FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
