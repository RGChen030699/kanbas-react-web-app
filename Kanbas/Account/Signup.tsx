import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const [verifyPassword, setVerifyPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    if (user.password !== verifyPassword) {
      alert("Passwords do not match!");
      return;
    }
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kanbas/Account/Profile");
  };

  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <input
        id="wd-username"
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="form-control mb-1"
        style={{ marginBottom: "5px" }}
      />
      <input
        id="wd-password"
        value={user.password || ""}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        type="password"
        className="form-control mb-1"
        style={{ marginBottom: "5px" }}
      />
      <input
        id="wd-verify-password"
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
        placeholder="verify password"
        type="password"
        className="form-control mb-1"
        style={{ marginBottom: "10px" }}
      />
      <button
        id="wd-signup-btn"
        onClick={signup}
        className="btn btn-primary w-100"
        style={{ marginBottom: "10px", padding: "10px 0" }}
      >
        Sign up
      </button>
      <Link id="wd-signin-link" to="/Kanbas/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}