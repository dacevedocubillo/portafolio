const Certifications = () => {
  return (
    <section className="certifications section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-subtitle">CERTIFICATIONS</h6>
          <h2 className="section-title">Professional Development</h2>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="certificate-card">
              <i className="bi bi-patch-check-fill"></i>
              <h5>Oracle Next Education</h5>
              <p>Front-End Development Program</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="certificate-card">
              <i className="bi bi-patch-check-fill"></i>
              <h5>Web Design Technician</h5>
              <p>Universidad Técnica Nacional</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="certificate-card">
              <i className="bi bi-patch-check-fill"></i>
              <h5>Programming Essentials in Python</h5>
              <p>Cisco Networking Academy</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="certificate-card">
              <i className="bi bi-patch-check-fill"></i>
              <h5>NDG Linux Essentials</h5>
              <p>Cisco Networking Academy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;