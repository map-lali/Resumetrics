import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function APLogInPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const togglePassword = () => setShowPassword((v) => !v);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", form);
    // call your login API here…
  };

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <div style={styles.logoPlaceholder} />
        <h1 style={styles.title}>Log in to Resumetrics</h1>
        <p style={styles.subtitle}>
          Welcome back! Let's get started by logging into your account.
        </p>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <div style={styles.passwordWrapper}>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <span onClick={togglePassword} style={styles.eyeIcon}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button type="submit" style={styles.loginButton}>
          Sign In
        </button>

        <div style={styles.links}>
          <p>
            Don’t have an account?{" "}
            <a href="/ap/signup" style={styles.link}>
              Sign up
            </a>
          </p>
          <p>
            <a href="/forgot-password" style={styles.link}>
              Forgot Password?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}


const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#2B2D42", // Light background
    padding: "1rem",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "5rem",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    color: "#333",
  },
  logoPlaceholder: {
    width: "60px",
    height: "60px",
    backgroundColor: "#2B2D42",
    margin: "0 auto 20px",
    borderRadius: "8px",
  },
  title: {
    marginBottom: "0.5rem",
    fontSize: "1.8rem",
    color: "#2B2D42",
  },
  subtitle: {
    marginBottom: "1.5rem",
    fontSize: "0.95rem",
    color: "#666",
  },
  formGroup: {
    marginBottom: "1.2rem",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "0.3rem",
    fontSize: "0.9em",
    color: "#333",
    fontWeight: 500,
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
  passwordWrapper: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#888",
  },
  loginButton: {
    width: "104%",
    padding: "0.8rem",
    backgroundColor: "#2B2D42",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    fontWeight: 600,
    fontSize: "1em",
    cursor: "pointer",
    marginTop: "1rem",
  },
  links: {
    marginTop: "1.5rem",
    fontSize: "0.85rem",
    color: "#666",
  },
  link: {
    color: "#2B2D42",
    textDecoration: "none",
    fontWeight: 500,
  },
};
