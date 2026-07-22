const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>Daniela Acevedo</h3>
            <p>Junior Software Developer</p>
            <p>Building software that solves real-world problems.</p>
          </div>
          <div className="col-lg-6 text-lg-end">
            <div className="footer-icons">
              <a href="https://github.com/TUUSUARIO" target="_blank"><i className="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/daniela-acevedo-cubillo" target="_blank"><i className="bi bi-linkedin"></i></a>
            </div>
            <p className="mt-4">© 2026 Daniela Acevedo. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;