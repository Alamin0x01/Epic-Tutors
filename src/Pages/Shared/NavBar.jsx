import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/UseInstructor";
import useStudent from "../../hooks/useStudent";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [isStudent] = useStudent();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();

  const handleLogout = () => {
    logOut();
  };

  const headerOptions = (
    <>
      <li className="text-xl">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Classes
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to="/instructors"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Instructors
        </NavLink>
      </li>
      {user && (
        <li className="text-xl">
          {isAdmin && (
            <NavLink to="/dashboard/manageuser" className="link">
              Dashboard
            </NavLink>
          )}
          {isStudent && (
            <NavLink to="/dashboard/selectedClass" className="link">
              Dashboard
            </NavLink>
          )}
          {isInstructor && (
            <NavLink to="/dashboard/myclasses" className="link">
              Dashboard
            </NavLink>
          )}
        </li>
      )}
    </>
  );
  return (
    <div className="navbar mx-auto mt-3 relative">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            {headerOptions}
          </ul>
        </div>
        <Link to="/" className="navbar-brand hidden md:block">
          <img
            className=" w-32 h-20 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9lxFcPMHpwKWB0IXVuTTwGms6niJaxy0FNKYA7LN4EVAFFe52vPG2fLMvlesPKQLJv8&usqp=CAU"
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1">{headerOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-cyan-400 ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>
            <button
              className="btn btn-outline btn-error  ms-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-outline btn-success">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
