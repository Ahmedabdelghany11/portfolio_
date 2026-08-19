import Button from "../../components/Button/Button";
import HeroScene from "../../components/HeroScene/HeroScene";

function Hero() {
  return (
    <section className="hero" id="home">
      <HeroScene />

      <div className="hero__glow" />

      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Frontend Engineer
            </div>

            <p className="hero__eyebrow">
              Hello, I'm
            </p>

            <h1 className="hero__title">
              Ahmed
              <span>Abdelghany</span>
            </h1>

            <h2 className="hero__role">
              Building modern web experiences
            </h2>

            <p className="hero__description">
              I build scalable, responsive, and
              maintainable web applications using
              modern frontend technologies, with a
              strong focus on clean architecture,
              performance, and user experience.
            </p>

            <div className="hero__technologies">
              <span>React.js</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
            </div>

            <div className="hero__actions">
              <Button href="#projects">
                View My Work
              </Button>

              <Button
                href="#contact"
                variant="secondary"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;