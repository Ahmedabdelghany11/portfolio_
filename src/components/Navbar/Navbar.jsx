import { useState } from "react";
import navLinks from "../../data/navLinks";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="navbar__logo">Ahmed Abdelghany</h2>

      <button
        className="navbar__toggle"
        type="button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      <ul
        className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
