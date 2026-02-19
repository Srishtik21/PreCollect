import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CollectionLayout from "./layout/CollectionLayout";
import CollectionStrategy from "./pages/CollectionStrategy";
import ReviewCampaign from "./pages/ReviewCampaign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CollectionLayout />}>
          {/* ✅ DEFAULT PAGE */}
          <Route index element={<CollectionStrategy />} />

          {/* OTHER PAGES */}
          <Route path="collection-strategy" element={<CollectionStrategy />} />
          <Route path="review-campaign" element={<ReviewCampaign />} />
        </Route>

        {/* SAFETY FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
