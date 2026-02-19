import "./Sidebar.css";

const menu = [
  "User Management",
  "Communication Setting",
  "Upload Borrower List",
  "Accounts",
  "Collection Strategy",
  "Campaign Analytics",
  "Reports",
  "Borrower List",
  "Site Visit",
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        
        {menu.map((item) => (
          <div
            key={item}
            className={`nav-item ${
              item === "Site Visit" ? "active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="nav-item">Setting</div>
        <div className="user-email">precollect@gmail.com</div>
      </div>
    </aside>
  );
}
