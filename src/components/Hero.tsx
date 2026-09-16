import fotoPerfil from '../assets/FotoPerfil.jpeg';

const Hero = () => (
  <section className="hero">
    <div className="container"><div className="row align-items-center">
      <div className="col-lg-7">
        <span className="hero-subtitle">👋 Hello, I'm</span>
        <h1>Daniela Acevedo</h1>
        <h2>Junior Software Developer <span className="hero-divider">|</span> Freelance Web Developer</h2>
        <p>I build responsive websites and web applications with React, JavaScript, C#, SQL and modern web technologies. I'm graduating in Computer Engineering in October 2026 and I'm open to junior, trainee, internship and freelance opportunities.</p>
        <div className="availability-badge"><i className="bi bi-circle-fill"></i> Available for work & freelance projects</div>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary"><i className="bi bi-grid"></i> View My Work</a>
          <a href="#contact" className="btn btn-outline-light"><i className="bi bi-chat-dots"></i> Work With Me</a>
          <a href={`${import.meta.env.BASE_URL}assets/Daniela%20Acevedo%20Cubillo%20Resume.pdf`} className="btn btn-outline-light" target="_blank" rel="noreferrer"><i className="bi bi-file-earmark-person"></i> Resume</a>
        </div>
      </div>
      <div className="col-lg-5 text-center"><img src={fotoPerfil} alt="Daniela Acevedo" className="hero-image img-fluid" /></div>
    </div></div>
  </section>
);
export default Hero;
