import { useEffect, useState } from "react";
import navLinks from "../../data/navLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar__container">
        {/* Logo */}
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

        {/* Mobile Toggle */}
        <button
          type="button"
          className={`navbar__toggle ${isOpen ? "is-active" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation */}
        <nav
          className={`navbar__nav ${isOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);

            return (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__link ${
                  activeSection === sectionId ? "is-active" : ""
                }`}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            );
          })}

          {/* CTA */}
          <a href="#contact" className="navbar__cta" onClick={handleLinkClick}>
            Let's Talk
            <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
