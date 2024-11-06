import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer"; // Ensure this is the correct path to your reducer
import { useDispatch } from "react-redux";
import * as db from "../Database"; // Ensure this path points to your Database file

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({}); // Using any for simplicity
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password
    );
    if (!user) return; // Exit if user is not found
    dispatch(setCurrentUser(user)); // Dispatch action to set the current user
    navigate("/Kanbas/Dashboard"); // Redirect to dashboard
  };
  
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input
        defaultValue={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="form-control mb-2"
        placeholder="username"
        id="wd-username"
      />
      <input
        defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="form-control mb-2"
        placeholder="password"
        type="password"
        id="wd-password"
      />
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100">Sign in</button>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
    </div>
  );
}