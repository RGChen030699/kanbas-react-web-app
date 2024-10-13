import { NavLink } from "react-router-dom";
import './AccountNavigation.css';

export default function AccountNavigation() {
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
