import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ReviewCampaign.css";

export default function ReviewCampaign() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const [launching, setLaunching] = useState(false);

  function handleLaunch() {
    if (!confirmed) return;

    setLaunching(true);

    // 🔥 simulate API call
    setTimeout(() => {
      alert("Campaign launched successfully 🚀");
      navigate("/"); // or campaigns dashboard
    }, 1500);
  }

  return (
    <div className="review-campaign">

      {/* ================= HEADER ================= */}
      <div className="rc-header">
        <div>
          <h1>Review campaign before sending</h1>
          <p>
            Please review campaign details and preview messages before launching.
          </p>
        </div>

        <button
          className="rc-back-btn"
          onClick={() => navigate("/collection-strategy")}
        >
          ← Back to Edit
        </button>
      </div>

      {/* ================= SUMMARY ================= */}
      <div className="rc-stats">
        <Stat label="Total Recipients" value="👥 140" />
        <Stat label="Channel" value="✉️ SMS Message" />
        <Stat label="Stage" value="⏱ First Reminder" />
        <Stat label="Template" value="📄 Standard Due" />
      </div>

      {/* ================= PREVIEW ================= */}
      <h3 className="rc-section-title">Message Preview</h3>

      <div className="rc-table">
        <div className="rc-table-header">
          <div>BORROWER</div>
          <div>MESSAGE PREVIEW</div>
        </div>
        <TableRow
          name="Riya Arora"
          phone="+91******983"
          msg="Dear Riya Arora, your payment of ₹34,000 is overdue since 2023-09-15. Please complete your payment using the link below to avoid additional fees."
        />
        <TableRow
          name="Ahaan Bedi"
          phone="+91******456"
          msg="Dear Ahaan Bedi, your payment of ₹20,000 is overdue since 2024-04-25. Please complete your payment using the link below to avoid additional fees."
        />
        <TableRow
          name="Sara Singh"
          phone="+91******345"
          msg="Dear Sara Singh, your payment of ₹1,45,000 is overdue since 2025-01-02. Please complete your payment using the link below to avoid additional fees."
        />
        <TableRow
          name="Karan Mehta"
          phone="+91******789"
          msg="Dear Karan Mehta, your payment of ₹58,500 is overdue since 2024-12-18. Please complete your payment at the earliest to avoid service disruption."
        />

      </div>

      {/* ================= ACTION ================= */}
      <div className="rc-action-box">

        <div className="rc-confirm">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
          <span>
            I confirm that all campaign data and message templates are correct.
          </span>
        </div>

        <div className="rc-footer">
          <span className="rc-info">
            Campaign will start immediately. Messages may take few minutes to be delivered.
          </span>

          <button
            className="launch-btn"
            disabled={!confirmed || launching}
            onClick={handleLaunch}
          >
            {launching ? "Launching..." : "🚀 Start Campaign"}
          </button>
        </div>

      </div>
    </div>
  );
}

/* ===== helper components ===== */

function Stat({ label, value }) {
  return (
    <div className="rc-stat-card">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
}

function TableRow({ name, phone, msg }) {
  return (
    <div className="rc-table-row">
      <div className="borrower">
        <span className="borrower-name">{name}</span>
        <span className="borrower-phone">{phone}</span>
      </div>
      <div className="message">{msg}</div>
    </div>
  );
}
