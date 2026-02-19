import { useEffect, useRef, useState } from "react";
import "./UploadPage.css";

export default function UploadBorrowerList() {
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  // Handle file browse
  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (!selectedFiles.length) return;

    const validFiles = selectedFiles.filter(
      (file) =>
        file.name.toLowerCase().endsWith(".csv") ||
        file.name.toLowerCase().endsWith(".xlsx")
    );

    const newFiles = validFiles.map((file) => {
      const sizeMB = file.size / (1024 * 1024);

      return {
        id: crypto.randomUUID(),
        name: file.name,
        sizeText: sizeMB < 1
          ? `${Math.round(file.size / 1024)} KB`
          : `${sizeMB.toFixed(1)} MB`,
        progress: 0,
        status: "uploading",
      };
    });

    setFiles((prev) => [...prev, ...newFiles]);

    e.target.value = null; // mandatory reset
  };


  // Simulate upload progress
  useEffect(() => {
    const interval = setInterval(() => {
      setFiles((prev) =>
        prev.map((f) => {
          if (f.status === "uploading" && f.progress < 100) {
            const nextProgress = f.progress + Math.floor(Math.random() * 5);
            return {
              ...f,
              progress: Math.min(nextProgress, 100),
              status: nextProgress >= 100 ? "completed" : "uploading",
            };
          }
          return f;
        })
      );
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // Remove file
  const removeFile = (id) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Upload List</h2>
      <p className="page-subtitle">
        Import new borrower accounts and debts via CSV or Excel
      </p>

      {/* Upload Box */}
      <div
        className="action-menu"
      >
        <div
          className="upload-box"
          onClick={() => inputRef.current.click()}
        >
          <div className="upload-logo">
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 16V4" />
    <path d="M8 8l4-4 4 4" />
    <rect x="4" y="16" width="16" height="4" rx="1" />
  </svg>
</div>


          <input
            type="file"
            hidden
            multiple
            ref={inputRef}
            accept=".csv,.xlsx"
            onChange={handleFileSelect}
          />

          <p className="upload-title">
            Drop CSV/Excel file here or <span>browse</span>
          </p>
          <p className="upload-subtitle">
            Accepted formats – CSV, XLSX
          </p>

          <button className="browse-btn" type="button">
            Browse Files
          </button>
        </div>

        {/* Uploaded File List */}
        <div className="file-list">
          {files.map((file) => (
            <div key={file.id} className="file-card">
              <div className="file-left">
                <div className="file-icon">📄</div>

                <div className="file-details">
                  <div className="file-top">
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">{file.sizeText}</span>




                  </div>

                  <div className="file-progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>

                  <div className={`file-status ${file.status}`}>
                    {file.status === "uploading"
                      ? "Uploading..."
                      : "✓ Upload Complete"}
                  </div>
                </div>
              </div>

              <div className="file-right">
                <span className="file-percent">{file.progress}%</span>
                <button
                  className="delete-btn"
                  onClick={() => removeFile(file.id)}
                >
                  🗑
                </button>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
