import { Outlet } from "react-router-dom";
import "./SiteLayout.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function SiteLayout() {
  return (
    <div className="app-layout">
      <Topbar />

      <div className="app-body">
        <Sidebar />
        <main className="app-content">
          <Outlet /> {/*  pages change here */}
        </main>
      </div>
    </div>
  );
}
