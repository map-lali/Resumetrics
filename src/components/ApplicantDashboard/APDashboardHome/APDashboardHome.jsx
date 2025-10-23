import React from "react";

function APDashboardHome() {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr/><br></br>
      <div className="search-container">
        <i className="bi bi-search search-icon"></i>
        <input type="text" placeholder="Search for jobs" />
        
      </div>
      

<h2>Suggested Job Listings</h2>
      <div className="suggested-job-container">
        {[
          { title: "Graphic Designer", icon: "bi-palette-fill" },
          { title: "Software Engineer", icon: "bi-code-square" },
          { title: "Product Manager", icon: "bi-briefcase-fill" },
          { title: "UX Researcher", icon: "bi-search" },
        ].map((job, index) => (
          <button
            key={index}
            className="suggested-job-card"
            onClick={() => console.log(`Clicked: ${job.title}`)}
          >
            <div className="suggested-left">
              <div className="icon-box">
                <i className={`bi ${job.icon}`}></i>
              </div>
              <h3>{job.title}</h3>
            </div>
          </button>
        ))}
      </div>

      

      <hr/>
      <h2>Saved Job Listings</h2>
      <div className="job-container">
        {[
          { title: "Graphic Designer", icon: "bi-palette-fill" },
          { title: "Software Engineer", icon: "bi-code-square" },
          { title: "Product Manager", icon: "bi-briefcase-fill" },
          { title: "UX Researcher", icon: "bi-search" },
        ].map((job, index) => (
          <button
            key={index}
            className="job-card"
            onClick={() => console.log(`Clicked: ${job.title}`)}
          >
            <div className="suggested-left">
              <div className="icon-box">
                <i className={`bi ${job.icon}`}></i>
              </div>
              <h3>{job.title}</h3>
            </div>
          </button>
        ))}
      </div>
    </div>

  );
}

export default APDashboardHome;