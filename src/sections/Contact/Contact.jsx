import ContactForm from "../../components/ContactForm/ContactForm";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionTitle subtitle="Let's work together" title="Get In Touch" />

        <div className="contact__content">
          <div className="contact__info">
            <h3>Have a project in mind?</h3>

            <p>
              I'm always interested in discussing new projects, ideas, and
              opportunities.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
