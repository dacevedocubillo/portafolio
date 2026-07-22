const Education = () => {
  return (
    <section id="education" className="education section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-subtitle">EDUCATION</h6>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="education-card">
              <i className="bi bi-mortarboard-fill"></i>
              <h4>Bachelor's Degree</h4>
              <h5>Computer Engineering</h5>
              <p>Universidad Castro Carazo</p>
              <span>Expected Graduation</span>
              <strong>October 2026</strong>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="education-card">
              <i className="bi bi-laptop-fill"></i>
              <h4>Web Design Technician</h4>
              <p>Universidad Técnica Nacional</p>
              <span>Technical Degree</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="education-card">
              <i className="bi bi-award-fill"></i>
              <h4>Oracle Next Education</h4>
              <p>Alura LATAM</p>
              <span>Front-End Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;