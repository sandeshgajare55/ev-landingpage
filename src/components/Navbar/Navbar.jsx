import Home  from "../Home/Home";
import "./Navbar.css";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import About from "../About/About";
import Contact from "../Contact/Contact";
import Explore from "../Explore/Explore";
// created a navbar which will display above
export const Navbar = () => {
  return (
    <Router>
    <div className="nav">
      <div className="nav-logo">EV Landing</div>
      <ul className="nav-menu">
        <li className="nav-home">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-explore">
        <Link to="/explore">Explore</Link>
        </li>
        <li className="nav-about">
        <Link to="/about">About</Link>
        </li>
        <li className="nav-contact">
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>


    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
         </Routes>
    </Router>
  );
};
