import "./Topbar.css";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">PreCollect</div>

      <div className="topbar-right">
  {/* Search Icon */}
  <span className="icon">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <line
        x1="16.65"
        y1="16.65"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  </span>

  {/* Bell Icon */}
  <span className="icon">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M13.73 21a2 2 0 01-3.46 0"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  </span>

  {/* Profile Icon */}
  <div className="avatar">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M20 21a8 8 0 10-16 0"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  </div>
</div>

    </header>
  );
}
