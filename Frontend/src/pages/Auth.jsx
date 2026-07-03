import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        const res = await API.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem("token", res.data.token);

        alert("Login Successful ✅");

        navigate("/");
      } else {
        await API.post("/auth/register", formData);

        alert("Registration Successful ✅");

        setIsLogin(true);

        setFormData({
          fullName: "",
          email: "",
          password: "",
        });
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="auth-section">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Create Account"}</h2>

        {!isLogin && (
          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="toggle-text">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            style={{ cursor: "pointer", color: "#2563eb" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </div>
    </section>
  );
}

export default Auth;