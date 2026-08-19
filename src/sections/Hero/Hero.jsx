import Button from "../../components/Button/Button";
import HeroScene from "../../components/HeroScene/HeroScene";

function Hero() {
  return (
    <section className="hero" id="home">
      <HeroScene />

      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <p className="hero__eyebrow">
              Hello, I'm
            </p>

            <h1 className="hero__title">
              Ahmed Abdelghany
            </h1>

            <h2 className="hero__role">
              Frontend Developer
            </h2>

            <div className="hero__technologies">
              <span className="technology">
                React.js
              </span>

              <span className="separator">|</span>

              <span className="technology">
                TypeScript
              </span>
            </div>

            <p className="hero__description">
              I build scalable and responsive web
              applications with modern frontend
              technologies and a strong focus on
              clean, maintainable user interfaces.
            </p>

            <div className="hero__actions">
              <Button href="#projects">
                View My Work
              </Button>

              <Button
                href="#contact"
                variant="secondary"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;