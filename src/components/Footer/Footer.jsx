import "./_footer.scss";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ahmed-abd-el-ghany",
  },
  {
    label: "GitHub",
    href: "https://github.com/ahmed-abdelghany",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/971544615067",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <a className="footer__logo" href="#home" aria-label="Back to home">
            Ahmed<span>.</span>
          </a>

          <nav className="footer__nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="footer__back" href="#home">
            <span>Back to top</span>

            <span className="footer__back-icon" aria-hidden="true">
              ↑
            </span>
          </a>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} Ahmed Abdelghany</p>

          <div className="footer__socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>

          <span className="footer__built">Frontend Developer</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
