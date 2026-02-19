import { useState } from "react";
import "./UserManagement.css";

const USERS = [
    {
        id: 1,
        name: "Riya Arora",
        designation: "Senior Manager",
        email: "RiyaArora@gmail.com",
        role: "Admin",
        status: "Active",
        avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
        id: 2,
        name: "Hitesh Patel",
        designation: "Project lead",
        email: "Hitesh2980@gmail.com",
        role: "Collection admin",
        status: "Active",
        avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
        id: 3,
        name: "Ram Bedi",
        designation: "Analyst",
        email: "Rambedi@gmail.com",
        role: "Analyst",
        status: "Invited",
        avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
        id: 4,
        name: "Siya Reddy",
        designation: "Collection agent",
        email: "Siya999@gmail.com",
        role: "Analyst",
        status: "Disabled",
        avatar: "https://i.pravatar.cc/40?img=4",
    },
    {
        id: 5,
        name: "Ganesh Gare",
        designation: "Collection agent",
        email: "Gare03847@gmail.com",
        role: "Analyst",
        status: "Disabled",
        avatar: "https://i.pravatar.cc/40?img=5",
    },
    {
        id: 6,
        name: "Rani Priya",
        designation: "Collection agent",
        email: "RaniPriya3@gmail.com",
        role: "Analyst",
        status: "Disabled",
        avatar: "https://i.pravatar.cc/40?img=6",
    },
    {
    id: 7,
    name: "Aman Verma",
    designation: "Operations Manager",
    email: "aman.verma@gmail.com",
    role: "Admin",
    status: "Active",
    avatar: "https://i.pravatar.cc/40?img=7",
},
{
    id: 8,
    name: "Neha Sharma",
    designation: "HR Executive",
    email: "neha.sharma@gmail.com",
    role: "Collection admin",
    status: "Active",
    avatar: "https://i.pravatar.cc/40?img=8",
},
{
    id: 9,
    name: "Kunal Mehta",
    designation: "Data Analyst",
    email: "kunal.mehta@gmail.com",
    role: "Analyst",
    status: "Invited",
    avatar: "https://i.pravatar.cc/40?img=9",
},
{
    id: 10,
    name: "Pooja Nair",
    designation: "Collection Agent",
    email: "pooja.nair@gmail.com",
    role: "Analyst",
    status: "Disabled",
    avatar: "https://i.pravatar.cc/40?img=10",
},
{
    id: 11,
    name: "Rohit Singh",
    designation: "Team Supervisor",
    email: "rohit.singh@gmail.com",
    role: "Admin",
    status: "Active",
    avatar: "https://i.pravatar.cc/40?img=11",
},

];

export default function UserManagement() {
    const [search, setSearch] = useState("");
    const [role, setRole] = useState("All");
    const [status, setStatus] = useState("All");

    const ITEMS_PER_PAGE = 6;
    const [currentPage, setCurrentPage] = useState(1);


    const filteredUsers = USERS.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole = role === "All" || u.role === role;
    const matchesStatus = status === "All" || u.status === status;

    return matchesSearch && matchesRole && matchesStatus;
  });

  // ✅ PAGINATION CALCULATIONS
  const totalUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalUsers / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    const resetFilters = () => {
  setSearch("");
  setRole("All");
  setStatus("All");
  setCurrentPage(1);
};


    return (
        
        <div className="user-management">

  {/* HEADER */}
  <div className="page-header">
    <h1>User management</h1>
    <p className="subtitle">
      Manage employees and access levels across the platform.
    </p>
  </div>

  {/* CONTROLS */}
  <div className="controls">
    <div className="search-box">
      <span className="icon">🔍</span>
      <input
  placeholder="Search by name or email"
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  }}
/>
    </div>

    <div className="filters">
      <div className="dropdown">
        <span className="dropdown-label">Role :</span>
        <select value={role} onChange={(e) => { setRole(e.target.value); setCurrentPage(1);}}>
          <option>All</option>
          <option>Admin</option>
          <option>Collection admin</option>
          <option>Analyst</option>
        </select>
      </div>

      <div className="dropdown">
        <span className="dropdown-label">Status :</span>
        <select value={status} onChange={(e) => {setStatus(e.target.value); setCurrentPage(1); }} >
          <option>All</option>
          <option>Active</option>
          <option>Invited</option>
          <option>Disabled</option>
        </select>
      </div>

      <button className="reset" onClick={resetFilters}>
        Reset
      </button>

    </div>
  </div>


            {/* TABLE */}
            <div className="table">
                <div className="row header">
                    <span>Name</span>
                    <span>Email</span>
                    <span>Role</span>
                    <span>Status</span>
                    <span>Actions</span>
                </div>

                <div className="table-body">
                    {paginatedUsers.map((u) => (
                        <div className="row" key={u.id}>
                            <div className="user-cell">
                                <img src={u.avatar} alt="" />
                                <div>
                                    <strong>{u.name}</strong>
                                    <small>{u.designation}</small>
                                </div>
                            </div>

                            <span>{u.email}</span>

                            <span className={`role ${u.role.replace(" ", "-").toLowerCase()}`}>
                                {u.role}
                            </span>

                            <span className={`status ${u.status.toLowerCase()}`}>
                                {u.status}
                            </span>

                            <span className="dots">⋮</span>
                        </div>
                    ))}
                </div>
                <div className="table-footer">
          <span className="info">
            Showing {startIndex + 1}–
            {Math.min(endIndex, totalUsers)} of {totalUsers} users
          </span>

          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              ‹ Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  className={page === currentPage ? "active" : ""}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              )
            )}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
