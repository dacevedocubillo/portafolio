const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h6 className="section-subtitle">ABOUT ME</h6>
            <h2 className="section-title">Passionate About Building Software</h2>
            <p className="about-text">
              I am a Computer Engineering student expected to graduate in October 2026, 
              currently working in a multinational IT environment while transitioning into software development.
            </p>
            <p className="about-text">
              My primary focus is backend development using <strong>C#, ASP.NET Core, ASP.NET MVC, SQL Server, Entity Framework, and REST APIs.</strong>
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-6"><div className="info-card"><h3>2026</h3><p>Expected Graduation</p></div></div>
              <div className="col-6"><div className="info-card"><h3>10+</h3><p>Technologies</p></div></div>
              <div className="col-6"><div className="info-card"><h3>3+</h3><p>Software Projects</p></div></div>
              <div className="col-6"><div className="info-card"><h3>2+</h3><p>Years in IT</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;