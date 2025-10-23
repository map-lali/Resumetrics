import React from "react";
import { useNavigate } from "react-router-dom";

function APJobListings() {
  const navigate = useNavigate();

  const jobs = [
    {
      title: "Graphic Designer",
      icon: "bi-palette-fill",
      description: "Create visual concepts and design assets for digital and print media.",
      category: "Design & Creative",
      type: "Full Time",
      salary: "₱35,000 - ₱50,000 per month",
    },
    {
      title: "Software Engineer",
      icon: "bi-code-square",
      description: "Develop and maintain scalable web applications and backend services.",
      category: "Developers/Programmers (Information & Communication Technology)",
      type: "Full Time",
      salary: "₱60,000 - ₱90,000 per month",
    },
    {
      title: "Product Manager",
      icon: "bi-briefcase-fill",
      description: "Lead product strategy and coordinate cross-functional development teams.",
      category: "Product & Project Management",
      type: "Full Time",
      salary: "₱70,000 - ₱100,000 per month",
    },
    {
      title: "UX Researcher",
      icon: "bi-search",
      description: "Conduct user research to inform design decisions and improve usability.",
      category: "User Experience & Research",
      type: "Contract",
      salary: "₱40,000 - ₱60,000 per month",
    },
  ];

  return (
    <div>
      <h1>Current Available Job Listings</h1>
      <hr />
      <br />
      <div className="search-container">
        <i className="bi bi-search search-icon"></i>
        <input type="text" placeholder="Search for jobs" />
      </div>
      <br />
      <div className="job-container">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="job-card"
            onClick={() => {
              if (job.title === "Software Engineer") {
                // navigate to APJobInfo file route and pass job via state
                navigate("/ap-dashboard/job-info", { state: { job } });
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <div className="suggested-left">
              <div className="icon-box">
                <i className={`bi ${job.icon}`}></i>
              </div>
              <div className="job-info">
                <h3>{job.title}</h3>
                <p className="job-description">{job.description}</p>
                <p className="job-meta"><strong>Category:</strong> {job.category}</p>
                <p className="job-meta"><strong>Type:</strong> {job.type}</p>
                <p className="job-meta"><strong>Salary:</strong> {job.salary}</p>
              </div>
            </div>

            <div className="job-actions" onClick={(e) => e.stopPropagation()}>
              <button
                className="apply-btn"
                onClick={() => navigate('/ap-dashboard/upload-resume')}
              >
                Apply
              </button>
              <button
                className="save-btn"
                onClick={() => console.log(`Save: ${job.title}`)}
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default APJobListings;