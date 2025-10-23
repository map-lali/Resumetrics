    import React from "react";
    
    export default function ReviewApplicants() {
      const handleApprove = () => console.log("Approved!");
      const handleReject = () => console.log("Rejected!");
    
      return (
        <div>
          
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
    