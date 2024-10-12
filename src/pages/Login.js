import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">PeerSilk</span>
        <span className="title">Welcome Back!</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign In</button>
        </form>
        {err && <span className="error">Something went wrong! Try again.</span>}
        <p>
          New to PeerSilk?
          <Link className="link" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
