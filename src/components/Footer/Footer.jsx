import "./_footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a href="#home" className="footer__brand" aria-label="Back to home">
            A. A.
          </a>

          <p className="footer__message">Designed & built with React.</p>

          <a href="#home" className="footer__back" aria-label="Back to top">
            Back to top
            <span>↑</span>
          </a>
        </div>

        <div className="footer__bottom">
          <span>© {year} Ahmed Abdelghany</span>

          <span>Frontend Engineer</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
