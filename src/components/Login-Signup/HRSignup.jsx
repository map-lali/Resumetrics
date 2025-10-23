

import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function HRSignUpPage() {
  const [form, setForm] = useState({
    companyName: "",
    companyEmail: "",
    companyAddress: "",
    companyPhone: "",
    password: "",
    confirmPassword: "",
    logoFileName: "No file selected",
  });
  const [logoPreviewUrl, setLogoPreviewUrl] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setLogoPreviewUrl(null);
      setForm((prev) => ({ ...prev, logoFileName: "No file selected" }));
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setLogoPreviewUrl(reader.result);
      setForm((prev) => ({ ...prev, logoFileName: file.name }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form, "Logo URL:", logoPreviewUrl);
    // call your signup API here…
  };

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleSubmit}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div style={styles.logoSquare} />
          <h1 style={styles.title}>Sign Up to Resumetrics</h1>
          <p style={styles.subtitle}>
            Enter your details below to create your account
          </p>
        </div>

        {/* Inputs */}
        <div style={styles.grid}>
          <Input
            label="Company Name"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
          />
          <Input
            label="Company Email"
            type="email"
            name="companyEmail"
            value={form.companyEmail}
            onChange={handleChange}
          />
          <Input
            label="Company Address"
            name="companyAddress"
            value={form.companyAddress}
            onChange={handleChange}
          />
          <Input
            label="Company Phone Number"
            name="companyPhone"
            value={form.companyPhone}
            onChange={handleChange}
          />

          {/* Password with toggle */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                style={styles.input}
              />
              <FaEye
                style={styles.eyeIcon}
                onClick={() => setShowPassword((v) => !v)}
              />
            </div>
          </div>

          {/* Confirm Password with toggle */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <div style={styles.passwordWrapper}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                style={styles.input}
              />
              <FaEye
                style={styles.eyeIcon}
                onClick={() => setShowConfirmPassword((v) => !v)}
              />
            </div>
          </div>
        </div>

        {/* Logo Upload */}
        <div style={{ margin: "1.5rem 0", textAlign: "center" }}>
          <p style={styles.uploadLabel}>Upload Company Logo</p>
          <label style={styles.logoBox}>
            {logoPreviewUrl ? (
              <img
                src={logoPreviewUrl}
                alt="Logo Preview"
                style={styles.logoImage}
              />
            ) : (
              <span style={styles.plusSign}>+</span>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              style={{ display: "none" }}
            />
          </label>
          <div style={styles.fileName}>{form.logoFileName}</div>
        </div>

        {/* Buttons */}
        <div style={styles.buttons}>
          <button
            type="button"
            style={{ ...styles.button, ...styles.cancelButton }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{ ...styles.button, ...styles.submitButton }}
          >
            Sign Up
          </button>
        </div>

        {/* Sign in link */}
        <p style={styles.signIn}>
          Already have an account?{" "}
          <a href="/hr/login" style={styles.link}>
            Log in!
          </a>
        </p>
      </form>
    </div>
  );
}

// --- Small Reusable Input ---
function Input({ label, type = "text", name, value, onChange }) {
  return (
    <div style={styles.inputGroup}>
      <label style={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={styles.input}
      />
    </div>
  );
}

// --- Styles ---
const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#2B2D42",
    padding: "40px",
  },
  card: {
    background: "#fff",
    padding: "10rem",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    width: "900px",
 
  },
  logoSquare: {
    width: "40px",
    height: "40px",
    background: "#2B2D42",
    margin: "0 auto 1rem",
    borderRadius: "4px",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "#000",
    margin: 0,
  },
  subtitle: {
    fontSize: "1rem",
    color: "#818181",
    margin: "0.5rem 0 0",
  },
  grid: {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "1fr 1fr",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "0.9em",
    marginBottom: "0.3rem",
    color: "#000",
  },
  passwordWrapper: {
    position: "relative",
    width: "100%",
  },
  input: {
    width: "95%",
    padding: "0.7rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "1em",
    backgroundColor: "#F5F5F5",
    color: "#333",
    outline: "none",
  },
  eyeIcon: {
    position: "absolute",
    top: "50%",
    right: "0.75rem",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#888",
  },
  uploadLabel: {
    fontWeight: 600,
    marginBottom: "0.5rem",
    color: "#333",
  },
  logoBox: {
    width: "100px",
    height: "100px",
    border: "2px dashed #ccc",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    cursor: "pointer",
  },
  plusSign: {
    fontSize: "1.5rem",
    color: "#000",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
  fileName: {
    marginTop: "0.5rem",
    fontSize: "0.9em",
    color: "#555",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1.5rem",
  },
  button: {
    flex: 1,
    minWidth: "150px",
    padding: "0.8rem 0",
    border: "none",
    borderRadius: "6px",
    fontSize: "1em",
    fontWeight: 600,
    cursor: "pointer",
  },
  cancelButton: {
    background: "#eee",
    color: "#333",
  },
  submitButton: {
    background: "#2B2D42",
    color: "#fff",
  },
  signIn: {
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "0.9em",
    color: "#000",
  },
  link: {
    color: "#2B2D42",
    fontWeight: 600,
    textDecoration: "none",
  },
};
