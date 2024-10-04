import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 110 }} // Sidebar width approximately 110px
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      {/* Northeastern logo */}
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" alt="NEU Logo" />
      </a>

      {/* Account Link */}
      <NavLink
        to="/Kanbas/Account"
        id="wd-account-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <FaRegCircleUser className="fs-1" />
        <br />
        Account
      </NavLink>

      {/* Dashboard Link */}
      <NavLink
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <AiOutlineDashboard className="fs-1" />
        <br />
        Dashboard
      </NavLink>

      {/* Courses Link */}
      <NavLink
        to="/Kanbas/Courses"
        id="wd-courses-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <LiaBookSolid className="fs-1" />
        <br />
        Courses
      </NavLink>

      {/* Calendar Link */}
      <NavLink
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <IoCalendarOutline className="fs-1" />
        <br />
        Calendar
      </NavLink>

      {/* Inbox Link */}
      <NavLink
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <FaInbox className="fs-1" />
        <br />
        Inbox
      </NavLink>

      {/* Labs Link */}
      <NavLink
        to="/Kanbas/Labs"
        id="wd-labs-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <LiaCogSolid className="fs-1" />
        <br />
        Labs
      </NavLink>
    </div>
  );
}
