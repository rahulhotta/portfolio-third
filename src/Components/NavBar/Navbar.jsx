import "./Navbar.css";

/* icons from react-icons pkg */
import {
  MdHome,
  MdPerson,
  MdCreate,
  MdOutlineLogout,
  MdWork,
  MdContactMail,
} from "react-icons/md";


import {  FaTimes } from "react-icons/fa";
import { BsThreeDots, BsPersonCircle } from "react-icons/bs";


import { NavLink } from "react-router-dom";

const Navbar = ({ nav, setnav }) => {
  const NavUrl = ({ url, icon, description }) => {
    const checkWindowsSize = () => {
      if (window.innerWidth < 1024) setnav(!nav);
    };
    return (
      <li className="li_navlink">
        <NavLink
          to={`${url}`}
          onClick={() => checkWindowsSize()}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {icon}
          <span className="description">{description}</span>
        </NavLink>
      </li>
    );
  };

 

  return (
    // <div
    //   className={`navbar_container ${nav ? "navbar_mobile_active" : undefined}`}
    // >
    <div
      className={
        nav ? "navbar_container navbar_mobile_active" : "navbar_container"
      }
    >
      <nav className={nav ? undefined : "nav_small"}>
        {/* logo */}

        <div className="logo">
          <NavLink to="/" >
            <BsPersonCircle className="logo_icon" />
          </NavLink>

          <FaTimes
            className="mobile_cancel_icon"
            onClick={() => setnav(!nav)}
          />
        </div>

        {/* submenu */}
        <ul className="menu_container">
          <span className="categories">{nav ? "Pages" : <BsThreeDots />}</span>

          <NavUrl url="/" icon={<MdHome />} description="Home" />

          <NavUrl url="about" icon={<MdPerson />} description="About" />

          <NavUrl url="skills" icon={<MdCreate />} description="Skills" />

          <NavUrl url="works" icon={<MdWork />} description="Works" />

          <NavUrl
            url="contact"
            icon={<MdContactMail />}
            description="Contact"
          />
        </ul>

        {/* LOGOUT BUTTON */}
        <div
          className="btn_logout"
          onClick={() => {
            setnav(!nav);
          }}
        >
          <MdOutlineLogout />
        </div>
        {/* ADD BACKGROUND FOR MOBILE */}
      </nav>
    </div>
  );
};

export default Navbar;
