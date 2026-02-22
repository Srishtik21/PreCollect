import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./CollectionStrategy.css";

/* STRATEGY DATA (SOURCE OF TRUTH) */
const STRATEGIES = {
  standard: {
    label: "Standard Collection Flow",
    cards: [
      {
        title: "First Reminder",
        day: "Day 1–3",
        desc: "Friendly nudge soon after due date with a clear payment link",
        meta: "1 Email · 1 SMS",
        badge: "Low Touch",
        badgeType: "green",
      },
      {
        title: "Gentle Reminder",
        day: "Day 7–14",
        desc: "Soft but firm tone emphasising upcoming fees and support options",
        meta: "2 Emails · 1 Call",
        badge: "Standard",
        badgeType: "gray",
      },
      {
        title: "Overdue Alert",
        day: "Day 15–30",
        desc: "Escalated message with stronger language and follow-ups",
        meta: "2 Emails · 2 Calls · Visit",
        badge: "Higher Urgency",
        badgeType: "orange",
      },
      {
        title: "Final Warning",
        day: "Day 31+",
        desc: "Formal notice outlining final deadline and legal steps",
        meta: "4 Emails · Letter · Calls",
        badge: "Critical",
        badgeType: "red",
      },
    ],
  },

  soft: {
    label: "Soft Reminder Flow",
    cards: [
      {
        title: "Friendly Reminder",
        day: "Day 1–7",
        desc: "Polite reminder for trusted borrowers",
        meta: "1 Email · 1 SMS",
        badge: "Low Touch",
        badgeType: "green",
      },
      {
        title: "Follow-up Reminder",
        day: "Day 10–20",
        desc: "Gentle follow-up with support options",
        meta: "1 Email",
        badge: "Standard",
        badgeType: "gray",
      },
    ],
  },

  aggressive: {
    label: "Aggressive Recovery Flow",
    cards: [
      {
        title: "Immediate Alert",
        day: "Day 1",
        desc: "Direct alert after due date",
        meta: "SMS · Email · Call",
        badge: "Urgent",
        badgeType: "orange",
      },
      {
        title: "Legal Warning",
        day: "Day 7",
        desc: "Legal consequences highlighted",
        meta: "Email · Call · Site Visit",
        badge: "Critical",
        badgeType: "red",
      },
    ],
  },
};

export default function CollectionStrategy() {
  const navigate = useNavigate();
  const [strategyKey, setStrategyKey] = useState("");

  const selectedStrategy = STRATEGIES[strategyKey];

  const handleNext = () => {
    navigate("/strategy/review", {
      state: {
        strategy: strategyKey,
        strategyLabel: selectedStrategy.label,
      },
    });
  };

  return (
    <div className="collection-strategy">
      {/* HEADER */}
      <div className="cs-header">
        <div>
          <h1>Select Collection Strategy</h1>
          <p>Choose how you want to connect with this borrower group</p>
        </div>
      </div>

      {/* STRATEGY SELECT */}
      <div className="cs-select">
        <label>Strategy Template</label>
        <select
          value={strategyKey}
          onChange={(e) => setStrategyKey(e.target.value)}
        >
          <option value="">Select a collection strategy</option>
          <option value="standard">Standard Collection Flow</option>
          <option value="soft">Soft Reminder Flow</option>
          <option value="aggressive">Aggressive Recovery Flow</option>
        </select>
        <span className="hint">
          Choose from predefined sequences of reminders and tone levels
        </span>
      </div>

      {/* STRATEGY CARDS (DYNAMIC) */}
      <div className="cs-cards">
        {selectedStrategy &&
          selectedStrategy.cards.map((card, index) => (
            <StrategyCard key={index} {...card} />
          ))}
      </div>

      {/* FOOTER */}
      <div className="cs-footer">
        <button
          className="next-btn"
          disabled={!strategyKey}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

/* CARD COMPONENT */
function StrategyCard({ title, day, desc, meta, badge, badgeType }) {
  return (
    <div className="strategy-card">
      <div className="card-head">
        <h3>{title}</h3>
        <span className="day">{day}</span>
      </div>

      <p className="desc">{desc}</p>
      <p className="meta">{meta}</p>

      <span className={`badge ${badgeType}`}>{badge}</span>
    </div>
  );
}
