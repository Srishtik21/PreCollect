import { useState } from "react";
import "./SiteVisit.css";

export default function SiteVisit() {

  /* =========================
     SAFE DRAFT LOADING
  ========================== */

  const savedDraft = (() => {
    const saved = localStorage.getItem("siteVisitDraft");
    return saved ? JSON.parse(saved) : null;
  })();

  const visitStartTime =
    savedDraft?.visitStartTime ||
    new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

  const [formData, setFormData] = useState(
    savedDraft?.formData || {
      status: "",
      reason: "",
      propertyType: "Residential",
      occupancy: "Self Occupied",
      condition: "Good",
      metBorrower: "",
      borrowerResponse: "",
      promisedAmount: "",
      promisedDate: "",
      remarks: "",
      confirmLocation: false,
      finalRecommendation: "Follow Up Call",
      nextActionDate: "",
      gpsLocation: "37.7749° N, 122.4194° W",
      checkInTime: "10:20",
      checkOutTime: ""
    }
  );

  const [files, setFiles] = useState(savedDraft?.files || {});
  const [submitted, setSubmitted] = useState(savedDraft?.submitted || false);

  /* =========================
     HANDLERS
  ========================== */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleFileUpload = (type, e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFiles((prev) => ({
      ...prev,
      [type]: file
    }));
  };

  const handleSaveDraft = () => {
    localStorage.setItem(
      "siteVisitDraft",
      JSON.stringify({ formData, files })
    );
    alert("Draft Saved Successfully!");
  };

  const handleSubmit = () => {
    if (!formData.status)
      return alert("Select Visit Status");

    if (formData.status === "Unsuccessful" && !formData.reason)
      return alert("Select Reason");

    if (!formData.remarks)
      return alert("Please enter Officer Remarks");

    if (!formData.confirmLocation)
      return alert("Please confirm the location");

    setSubmitted(true);
    alert("Report Submitted Successfully!");
  };

  return (
    <div className="site-visit">

      {/* ================= HEADER ================= */}
      <div className="top-info-bar">
        <div className="info-block">
          <div className="main-text">Riya Arora</div>
          <div className="sub-text">Borrower name</div>
        </div>
        <div className="info-block">
          <div className="main-text">ID: #833520</div>
          <div className="sub-text">Case ID</div>
        </div>
        <div className="info-block">
          <div className="main-text">Personal Loan</div>
          <div className="sub-text">Loan Type</div>
        </div>
        <div className="info-block">
          <div className="main-text">₹ 34,000</div>
          <div className="sub-text">Outstanding Amount</div>
        </div>
        <div className="date-status">
          <div className="date-pill">
            {visitStartTime}
          </div>
          <div className="progress-pill">
            {submitted ? "Completed" : "In Progress"}
          </div>
        </div>
      </div>

      {/* ================= VISIT STATUS ================= */}
      <div className="card">
        <h3>Visit Status & Outcome</h3>
        <div className="grid-2">
          <div className="form-group">
            <label>Visit Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="">Select Status</option>
              <option>Successful</option>
              <option>Unsuccessful</option>
            </select>
          </div>

          {formData.status === "Unsuccessful" && (
            <div className="form-group">
              <label>Reason (If Unsuccessful)</label>
              <select name="reason" value={formData.reason} onChange={handleChange}>
                <option value="">Select Reason</option>
                <option>Not Available</option>
                <option>Incorrect Address</option>
                <option>Refused</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* ================= PROPERTY ================= */}
      <div className="card">
        <h3>Property & Site Inspection</h3>
        <div className="grid-3">
          <div className="form-group">
            <label>Property Type</label>
            <select name="propertyType" value={formData.propertyType} onChange={handleChange}>
              <option>Residential</option>
              <option>Commercial</option>
            </select>
          </div>
          <div className="form-group">
            <label>Occupancy Status</label>
            <select name="occupancy" value={formData.occupancy} onChange={handleChange}>
              <option>Self Occupied</option>
              <option>Tenant</option>
            </select>
          </div>
          <div className="form-group">
            <label>Property Condition</label>
            <select name="condition" value={formData.condition} onChange={handleChange}>
              <option>Good</option>
              <option>Average</option>
              <option>Poor</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================= BORROWER ================= */}
      <div className="card">
        <h3>Borrower Interaction</h3>

        <div className="form-group">
          <label>Met Borrower?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="metBorrower" value="Yes"
                checked={formData.metBorrower === "Yes"}
                onChange={handleChange}
              /> Yes
            </label>
            <label>
              <input type="radio" name="metBorrower" value="No"
                checked={formData.metBorrower === "No"}
                onChange={handleChange}
              /> No
            </label>
          </div>
        </div>

        {formData.metBorrower === "Yes" && (
          <>
            <div className="grid-2">
              <div className="form-group">
                <label>Borrower Response</label>
                <select name="borrowerResponse"
                  value={formData.borrowerResponse}
                  onChange={handleChange}
                >
                  <option value="">Select Response</option>
                  <option>Will Pay</option>
                  <option>Cannot Pay</option>
                </select>
              </div>

              <div className="form-group">
                <label>Promised Amount</label>
                <input
                  type="number"
                  name="promisedAmount"
                  value={formData.promisedAmount}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginTop: "15px" }}>
              <label>Promised Date</label>
              <input
                type="date"
                name="promisedDate"
                value={formData.promisedDate}
                onChange={handleChange}
              />
            </div>
          </>
        )}
      </div>

      {/* ================= REMARKS ================= */}
      <div className="card">
        <h3>Officer Remarks</h3>
        <textarea
          className="remarks-textarea"
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          placeholder="Describe the visit outcome..."
        />
      </div>

      {/* ================= ATTACHMENTS ================= */}
      <div className="card">
        <h3>Attachment & Proof</h3>
        <div className="attachment-grid">
          {["Property Photos", "ID Proof", "Property Docs", "Valuation Report"]
            .map((item, index) => (
              <div key={index} className="attachment-card">
                <label className="upload-box">
                  <input
                    type="file"
                    className="hidden-file-input"
                    onChange={(e) => handleFileUpload(item, e)}
                  />
                  Choose File
                </label>
                <div className="attachment-title">{item}</div>
                {files[item] && (
                  <div className="file-name">{files[item].name}</div>
                )}
              </div>
          ))}
        </div>
      </div>

      {/* ================= LOCATION ================= */}
      <div className="card">
        <h3>Location & Final Action</h3>

        <div className="grid-3">
          <div className="form-group">
            <label>GPS Location</label>
            <select name="gpsLocation"
              value={formData.gpsLocation}
              onChange={handleChange}
            >
              <option>37.7749° N, 122.4194° W</option>
              <option>28.6139° N, 77.2090° E</option>
            </select>
          </div>

          <div className="form-group">
            <label>Check In Time</label>
            <input
              type="time"
              name="checkInTime"
              value={formData.checkInTime}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Check Out Time</label>
            <input
              type="time"
              name="checkOutTime"
              value={formData.checkOutTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="confirm-row">
          <label className="confirm-label">
            <input
              type="checkbox"
              name="confirmLocation"
              checked={formData.confirmLocation}
              onChange={handleChange}
              className="confirm-checkbox"
            />
            I Confirm this visit was conducted at the mentioned location.
          </label>
        </div>

        <div className="grid-2" style={{ marginTop: "20px" }}>
          <div className="form-group">
            <label>Final Recommendation</label>
            <select
              name="finalRecommendation"
              value={formData.finalRecommendation}
              onChange={handleChange}
            >
              <option>Follow Up Call</option>
              <option>Close Case</option>
              <option>Legal Action</option>
            </select>
          </div>

          <div className="form-group">
            <label>Next Action Date</label>
            <input
              type="date"
              name="nextActionDate"
              value={formData.nextActionDate}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* ================= ACTION BUTTONS ================= */}
      <div className="action-buttons">
        <button className="secondary" onClick={handleSaveDraft}>
          Save Draft
        </button>
        <button className="primary" onClick={handleSubmit}>
          Submit Report
        </button>
      </div>
    </div>
  );
}
