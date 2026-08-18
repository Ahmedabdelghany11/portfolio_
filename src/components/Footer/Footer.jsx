import "./_footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a className="footer__logo" href="#home">
            Ahmed<span>.</span>
          </a>

          <nav className="footer__nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="footer__back" href="#home">
            Back to top <span>↑</span>
          </a>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} Ahmed Abdelghany. All rights reserved.
          </p>

          <div className="footer__socials">
            <a
              href="https://wa.me/971544615067"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>

            <a
              href="https://linkedin.com/in/ahmed-abd-el-ghany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ahmed-abdelghany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;