import { NavLink } from "react-router-dom";
import './AccountNavigation.css';
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation">
      <nav>
        <ul>
          <li>
            <NavLink 
              to={`/Kanbas/Account/Signin`} 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Signin
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={`/Kanbas/Account/Signup`} 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={`/Kanbas/Account/Profile`} 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
