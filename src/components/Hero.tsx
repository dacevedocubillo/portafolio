import fotoPerfil from '../assets/fotoPerfil.jpeg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="hero-subtitle">👋 Hello, I'm</span>
            <h1>Daniela Acevedo</h1>
            <h2>Junior Software Developer</h2>
            <p>
              Computer Engineering student expected to graduate in October 2026, 
              passionate about building scalable software solutions using C#, ASP.NET Core, 
              SQL Server, Entity Framework, REST APIs, and modern web technologies.
            </p>
            <div className="hero-buttons">
              <a
                href="/assets/Daniela Acevedo Cubillo Resume.pdf"
                className="btn btn-primary"
                target="_blank"
              >
                <i className="bi bi-file-earmark-person"></i>
                Download CV
              </a>
              <a href="https://github.com/dacevedocubillo" target="_blank" className="btn btn-outline-light">
                <i className="bi bi-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/daniela-acevedo-cubillo" target="_blank" className="btn btn-outline-light">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img src={fotoPerfil} alt="Foto de perfil" className="hero-image img-fluid"  />
 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;