import profileImage from "../../assets/images/avatar.jpeg";
import Button from "../../components/Button/Button";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <p className="hero__eyebrow">Hello, I'm</p>

            <h1 className="hero__title">Ahmed Abdelghany</h1>

            <h2 className="hero__role">Frontend Developer</h2>

            <div className="hero__technologies">
              <span className="technology">React.js</span>

              <span className="separator">|</span>

              <span className="technology">TypeScript</span>
            </div>

            <p className="hero__description">
              Frontend Developer with hands-on experience building scalable,
              responsive web applications using React.js, TypeScript, Redux
              Toolkit, and React Query.
            </p>

            <div className="hero__actions">
              <Button href="#projects">View My Work</Button>

              <Button href="#contact">Contact Me</Button>
            </div>
          </div>

          <div className="hero__image-wrapper">
            <img
              src={profileImage}
              alt="Ahmed Abdelghany"
              className="hero__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
