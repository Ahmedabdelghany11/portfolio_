import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import "./_contact.scss";

const contactLinks = [
  {
    label: "Email",
    value: "ahmed.abdelghany1211@gmail.com",
    href: "mailto:ahmed.abdelghany1211@gmail.com",
    icon: MdEmail,
  },
  {
    label: "LinkedIn",
    value: "Ahmed Abdelghany",
    href: "https://www.linkedin.com/in/ahmed-abdelghany-276051279/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    value: "Ahmed Abdelghany",
    href: "https://github.com/Ahmedabdelghany11",
    icon: FaGithub,
  },
  {
    label: "WhatsApp",
    value: "Let's chat",
    href: "https://wa.me/971544615067",
    icon: FaWhatsapp,
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__header">
            <span className="contact__eyebrow">Let's Connect</span>

            <h2 className="contact__title">
              Have a project
              <span> in mind?</span>
            </h2>

            <p className="contact__description">
              I'm always open to discussing new projects, frontend
              opportunities, and interesting ideas.
            </p>
          </div>

          <div className="contact__links">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                href={href}
                className="contact__link"
                key={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                <span className="contact__link-icon">
                  <Icon aria-hidden="true" />
                </span>

                <span className="contact__link-content">
                  <span className="contact__link-label">{label}</span>

                  <span className="contact__link-value">{value}</span>
                </span>

                <span className="contact__link-arrow">↗</span>
              </a>
            ))}
          </div>

          <a
            href="mailto:ahmed.abdelghany1211@gmail.com"
            className="contact__cta"
          >
            <span>Send me a message</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
