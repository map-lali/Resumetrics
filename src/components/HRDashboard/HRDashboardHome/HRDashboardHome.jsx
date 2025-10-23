import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HRDashboardHome() {
  const navigate = useNavigate();
  const handleApprove = () => console.log("Approved!");
  const handleReject = () => console.log("Rejected!");

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const options = [
    "Resume",
    "Cover Letter",
    "Portfolio",
    "Transcript",
    "Certificates",
    "References",
    "Interview Availability",
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = options.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="search-container">
        <i className="bi bi-search search-icon"></i>
        <input
          type="text"
          placeholder="Search for applicant requirements"
          value={query}
          onChange={handleSearchChange}
        />
        {query && suggestions.length > 0 && (
          <ul className="dropdown-list">
            {suggestions.map((item, index) => (
              <li key={index} className="dropdown-item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="button-group">
        <button
          className="main-feature-btn"
          onClick={() => navigate("/hr-dashboard/createrequest")}
        >
          <h3>Create Job Request</h3>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button
          className="main-feature-btn"
          onClick={() => navigate("/hr-dashboard/review")}
        >
          <h3>Review Job Applicants</h3>
          <i className="bi bi-view-list"></i>
        </button>
        <button
          className="main-feature-btn"
          onClick={() => navigate("/hr-dashboard/approved")}
        >
          <h3>Approved Applicants</h3>
          <i className="bi bi-archive-fill"></i>
        </button>
      </div>

      <h2>Pending for Approval</h2>
      <hr />

      {[...Array(5)].map((_, i) => (
        <div className="pending-container" key={i}>
          <div className="pending-left">
            <div className="icon-box">
              <i className="bi bi-envelope-arrow-up-fill"></i>
            </div>
            <div className="pending-info">
              <h3>Applicant #{10000 + i}</h3>
              <p>Applying for "Software Engineer"</p>
            </div>
          </div>
          <div className="pending-btn-group">
            <button className="icon-btn" onClick={handleApprove}>
              <i className="bi bi-check-circle"></i>
            </button>
            <button className="icon-btn" onClick={handleReject}>
              <i className="bi bi-x-circle"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
