import { useState } from "react";
import navLinks from "../../data/navLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__container">
        <a
          href="#home"
          className="navbar__logo"
          onClick={handleLinkClick}
          aria-label="Ahmed Abdelghany - Home"
        >
          <span className="navbar__logo-mark">
            <span className="navbar__logo-word navbar__logo-word--first">
              <span className="navbar__logo-short">
                A<span className="navbar__logo-dot">.</span>
              </span>

              <span className="navbar__logo-full">hmed</span>
            </span>

            <span className="navbar__logo-word navbar__logo-word--last">
              <span className="navbar__logo-short">
                A<span className="navbar__logo-dot">.</span>
              </span>

              <span className="navbar__logo-full">bdelghany</span>
            </span>
          </span>
        </a>

        <button
          type="button"
          className={`navbar__toggle ${isOpen ? "is-active" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`navbar__nav ${isOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
