import React from "react";

export default function ApprovedApplicants() {
  return (
    <div className="approved-applicants-page">
      <h3 className="form-title">Approved Applicants</h3>
      <hr />

      {[...Array(5)].map((_, i) => {
        const applicantId = 10000 + i;
        return (
          <div className="pending-container" key={applicantId}>
            <div className="pending-left">
              <div className="icon-box">
                <i className="bi bi-envelope-arrow-up-fill"></i>
              </div>
              <div className="pending-info">
                <h3>Applicant #{applicantId}</h3>
                <p>Applying for "Software Engineer"</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
