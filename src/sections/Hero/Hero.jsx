import Button from "../../components/Button/Button";
import DeveloperWorkspace from "../../components/DeveloperWorkspace/DeveloperWorkspace";

function Hero() {
  return (
    <section className="hero" id="home">
      <DeveloperWorkspace />

      <div className="hero__overlay" />

      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Frontend Engineer
            </div>

            <p className="hero__eyebrow">Hello, I'm</p>

            <h1 className="hero__title">
              <span>Ahmed</span>
              <span>Abdelghany</span>
            </h1>

            <h2 className="hero__role">
              I build fast, scalable & polished web interfaces.
            </h2>

            <p className="hero__description">
              Frontend Engineer focused on building modern React applications
              with reusable components, responsive interfaces, API integration,
              and a strong focus on performance and user experience.
            </p>

            <div className="hero__actions">
              <Button href="#projects">
                View My Work
                <span>→</span>
              </Button>

              <Button href="#contact" variant="secondary">
                Let's Connect
                <span>↗</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to About section"
      >
        <span className="hero__scroll-icon">
          <span />
        </span>

        <span className="hero__scroll-text">Scroll Down</span>

        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}

export default Hero;
