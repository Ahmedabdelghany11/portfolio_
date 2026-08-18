import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./_contact.scss";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__header">
            <span className="contact__eyebrow">Get In Touch</span>

            <h2 className="contact__title">
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p className="contact__description">
              Have a project in mind, an opportunity to discuss, or simply want
              to connect? Feel free to reach out.
            </p>
          </div>

          <div className="contact__actions">
            <a
              className="contact__email"
              href="mailto:ahmed.abdelghany1211@gmail.com"
            >
              <span>ahmed.abdelghany1211@gmail.com</span>
              <span className="contact__arrow">↗</span>
            </a>

            <div className="contact__socials">
              <a
                href="https://wa.me/971544615067"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact me on WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://github.com/ahmed-abdelghany"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/ahmed-abd-el-ghany"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
