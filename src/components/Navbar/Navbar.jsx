import { Home } from "../Home/Home";
import "./Navbar.css";

// created a navbar which will display above
export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">EV Landing</div>
      <ul className="nav-menu">
        <li className="nav-home">
          <a href="#">Home</a>
        </li>
        <li className="nav-explore">
          <a href="#">Explore</a>
        </li>
        <li className="nav-about">
          <a href="#">About</a>
        </li>
        <li className="nav-contact">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};
