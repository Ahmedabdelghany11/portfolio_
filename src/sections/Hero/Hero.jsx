import Button from "../../components/Button/Button";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <p className="hero__greeting">Hello, I'm</p>

        <h1 className="hero__name">Ahmed Abdelghany</h1>

        <h2 className="hero__role">
          Frontend Developer <span>|</span> React.js <span>|</span> TypeScript
        </h2>

        <p className="hero__description">
          Frontend Developer with hands-on experience building scalable,
          responsive web applications using React.js, TypeScript, Redux Toolkit,
          and React Query.
        </p>

        <div className="hero__actions">
          <Button href="#projects">View My Work</Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
