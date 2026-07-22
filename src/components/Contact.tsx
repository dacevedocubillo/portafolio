const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-subtitle">CONTACT</h6>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            I'm currently looking for opportunities as a Junior Software Developer.
          </p>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-lg-4">
            <div className="contact-card">
              <i className="bi bi-envelope-fill"></i>
              <h4>Email</h4>
              <p>your.email@email.com</p>
              <a href="mailto:your.email@email.com">Send Email</a>
            </div>
          </div>
          {/* LinkedIn y GitHub similares */}
        </div>
      </div>
    </section>
  );
};

export default Contact;