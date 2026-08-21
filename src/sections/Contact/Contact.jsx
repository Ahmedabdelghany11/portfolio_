import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./_contact.scss";

const socials = [
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    href: "https://linkedin.com/in/ahmed-abd-el-ghany",
  },
  {
    name: "GitHub",
    icon: faGithub,
    href: "https://github.com/ahmed-abdelghany",
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    href: "https://wa.me/971544615067",
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__header">
            <span className="contact__eyebrow">Let's Connect</span>

            <h2 className="contact__title">
              Have an idea?
              <span> Let's build it.</span>
            </h2>

            <p className="contact__description">
              I'm open to frontend opportunities, freelance projects, and
              collaborations where I can build useful, scalable, and
              well-crafted web experiences.
            </p>
          </div>

          <div className="contact__actions">
            <a
              className="contact__email"
              href="mailto:ahmed.abdelghany1211@gmail.com"
            >
              <span className="contact__email-label">Get in touch</span>

              <span className="contact__email-address">
                ahmed.abdelghany1211@gmail.com
              </span>

              <span className="contact__arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <div className="contact__footer">
              <span className="contact__footer-label">Find me online</span>

              <div className="contact__socials">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name}`}
                  >
                    <FontAwesomeIcon icon={social.icon} aria-hidden="true" />

                    <span>{social.name}</span>

                    <span className="contact__social-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
