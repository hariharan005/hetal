import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/header.css";

function Header() {
  const navRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          Counseling
          {showDropdown && (
            <ul className="dropdown">
              <li><a href="/#">Option 1</a></li>
              <li><a href="/#">Option 2</a></li>
              <li><a href="/#">Option 3</a></li>
            </ul>
          )}
        </a>
        <a href="/#">Blog</a>
        <a href="/#">Feedback</a>
        <button className="nav-btn nav-close-btn" onClick={toggleDropdown}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" id="ham" onClick={toggleDropdown}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
