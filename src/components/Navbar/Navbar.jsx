import Home from "../Home/Home";
import "./Navbar.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Explore from "../Explore/Explore";
// created a navbar which will display above
export const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <div className="nav-logo">EV Landing</div>
        <ul className="nav-menu">
          <li className="nav-home">
            <Link className="nav-home" to="/">
              Home
            </Link>
          </li>
          <li className="nav-explore">
            <Link className="nav-explore" to="/explore">
              Explore
            </Link>
          </li>
          <li className="nav-about">
            <Link className="nav-about" to="/about">
              About
            </Link>
          </li>
          <li className="nav-contact">
            <Link
              className="nav-contact"
              to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
