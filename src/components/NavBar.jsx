import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { NavLink, Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("logOut");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <div className="navbar bg-base-200 shadow-sm px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
          >
            <li>
            <NavLink to="/profile" end className={navClass}> Home</NavLink>
            </li>
            <li>
              <NavLink to={"/all"} className={navClass}>All projects</NavLink>
            </li>
            <li>
              <NavLink to={"/add"} className={navClass}>Add projects</NavLink>
            </li>
            <li>
              <NavLink to={"/update"} className={navClass}>Update projects</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/profile"} className="btn btn-ghost text-xl">
          Dashboard
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  gap-2">
           <li>
            <NavLink to="/profile"  className={navClass}> Home</NavLink>
            </li>
            <li>
              <NavLink to={"/all"} className={navClass}>All projects</NavLink>
            </li>
            <li>
              <NavLink to={"/add"} className={navClass}>Add projects</NavLink>
            </li>
            <li>
              <NavLink to={"/update"} className={navClass}>Update projects</NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a onClick={handleLogout} className="btn">
          Logout
        </a>
      </div>
    </div>
  );
};

export default NavBar;
