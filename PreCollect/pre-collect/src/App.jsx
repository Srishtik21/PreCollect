import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

import UserManagement from "./pages/UserManagement";
import UploadPage from "./pages/UploadPage";
import CollectionStrategy from "./pages/CollectionStrategy";
import ReviewCampaign from "./pages/ReviewCampaign";
import SiteVisit from "./pages/SiteVisit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<UserManagement />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path="strategy" element={<CollectionStrategy />} />
          <Route path="strategy/review" element={<ReviewCampaign />} />
          <Route path="site-visit" element={<SiteVisit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;