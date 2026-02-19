import "./DashboardLayout.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="app-layout">
      {/* TOP BAR – FULL WIDTH */}
      <Topbar />

      {/* BODY – SIDEBAR + CONTENT */}
      <div className="app-body">
        <Sidebar />
        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}
