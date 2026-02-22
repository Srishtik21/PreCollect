import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const menu = [
  { name: "User Management", path: "/" },
  { name: "Communication Setting", path: "/communication" },
  { name: "Upload Borrower List", path: "/upload" },
  { name: "Accounts", path: "/accounts" },
  { name: "Collection Strategy", path: "/strategy" },
  { name: "Campaign Analytics", path: "/analytics" },
  { name: "Reports", path: "/reports" },
  { name: "Borrower List", path: "/borrowers" },
  { name: "Site Visit", path: "/site-visit" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}   // so "/" only active on home
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="sidebar-footer">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Setting
        </NavLink>

        <div className="user-email">precollect@gmail.com</div>
      </div>
    </aside>
  );
}