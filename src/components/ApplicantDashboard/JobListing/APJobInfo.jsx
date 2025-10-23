import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function APJobInfo() {
    const navigate = useNavigate();
  const { state } = useLocation();
  const job = state?.job;
  return (
    <div>

      <hr />
      <div className="job-container">
        <h1>Associate Software Engineer</h1>
        <p>📍 Developers / Programmers (information & Communication Technology)</p>
        <p>🕒 Full time</p>
        <p>💵 ₱35,000 - ₱50,000</p>
        <p style={{ color: "#888" }}>posted 7h ago</p>


        <div className="job-actions">
            <button className="apply-btn" onClick={() => navigate("/ap-dashboard/upload-resume")}>Apply</button> <button className="save-btn">save</button>
        </div>
        <br></br>
        <h2>Job Description</h2>
        <p>We are looking for an experienced frontend software engineer.
             In this role you will work closely with other engineers, users, and business leaders to plan, 
             design, build, and ship high quality software.
        </p>
        <h2>Key Responsibilities</h2>
            <ul>
                <li>Develop high-quality web applications using modern HTML5, CSS3, and JavaScript frameworks.</li>
                <li>Maintain and enhance existing applications with a focus on performance, usability, and reliability.</li>
                <li>Identify, troubleshoot, and resolve technical issues in production environments.</li>
                <li>Collaborate with cross-functional teams to define technical requirements and deliver robust software solutions.</li>
                <li>Participate in research and development to support evolving business needs.</li>
                <li>Write and maintain clear, comprehensive technical documentation.</li>
                <li>Stay informed on industry trends, best practices, and emerging technologies to continually improve development processes.</li>
            </ul>
        <h2>Job Requirements</h2>
            <ul>
                <li>Bachelor's degree in Computer Science, Software Engineering, or related field, or equivalent years of work experience.</li>
                <li>At least 2 years of hands-on experience in building modern, responsive web applications.</li>
                <li>Strong proficiency in JavaScript, TypeScript, HTML, and CSS.</li>
                <li>Production-level experience with React or Next.js (Vue.js or Angular also considered).</li>
                <li>Experience translating design mockups into responsive, functional UI.</li>
                <li>Familiarity with version control systems and modern frontend build tools.</li>
                <li>Experience with debugging tools and browser performance profiling.</li>
                <li>Solid understanding of responsive and adaptive design principles.</li>
                <li>Knowledge of frontend testing tools (e.g., Jest, React Testing Library, Cypress).</li>
                <li>Excellent verbal and written communication skills in English.</li>
            </ul>
      </div>
    </div>
  );
}

export default APJobInfo;
