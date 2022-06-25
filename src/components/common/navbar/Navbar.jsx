import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => (
  <menu className="navbar">
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/"}>
        Home
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/blogs"}>
        Blogs
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/AllBlogs"}>
        Your Blogs
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/sign-in"}>
        Sign In
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/sign-up"}>
        Sign Up
      </NavLink>
    </li>
  </menu>
);