const Projects = () => {
  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-subtitle">PORTFOLIO</h6>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Here are some of the software development projects I've built using modern technologies and best practices.
          </p>
        </div>
        <div className="row g-4">
          {/* Project 1 */}
          <div className="col-lg-4">
            <div className="project-card">
              <img src="assets/project1.jpg" className="img-fluid project-image" alt="Business Management System" />
              <div className="project-content">
                <h3>Administrative Website for a Family Business - Academic Project</h3>
                <p>Built a business management web app using C#, ASP.NET
                  Core/MVC, SQL Server, Entity Framework, and
                  JavaScript. Focused on scalability, secure data handling,
                  and maintainable architecture.</p>
                <div className="project-tech">
                  <span>C#</span>
                  <span>ASP.NET Core</span>
                  <span>SQL Server</span>
                  <span>Entity Framework</span>
                </div>
                <div className="project-buttons">
                  <a href="#" className="btn btn-primary"><i className="bi bi-github"></i> GitHub</a>
                  <a href="#" className="btn btn-outline-light"><i className="bi bi-box-arrow-up-right"></i> Live Demo</a>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-4">
            <div className="project-card">
              <img src="assets/project1.jpg" className="img-fluid project-image" alt="Business Management System" />
              <div className="project-content">
                <h3>Vacation Management System — Academic Project</h3>
                <p>Developed a web application for managing employee
                  vacation requests using C#, ASP.NET MVC, SQL Server, and
                  Entity Framework</p>
                <div className="project-tech">
                  <span>C#</span>
                  <span>ASP.NET Core</span>
                  <span>SQL Server</span>
                  <span>Entity Framework</span>
                </div>
                <div className="project-buttons">
                  <a href="#" className="btn btn-primary"><i className="bi bi-github"></i> GitHub</a>
                  <a href="#" className="btn btn-outline-light"><i className="bi bi-box-arrow-up-right"></i> Live Demo</a>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-4">
            <div className="project-card">
              <img src="assets/project1.jpg" className="img-fluid project-image" alt="Business Management System" />
              <div className="project-content">
                <h3>Alura-Geek</h3>
                <p> A simple web page created using HTML and CSS, focusing on clean layout
                  and responsive design principles. This project demonstrates fundamental
                  front‑end skills and basic web styling techniques.</p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
                <div className="project-buttons">
                  <a href="#" className="btn btn-primary"><i className="bi bi-github"></i> GitHub</a>
                  <a href="#" className="btn btn-outline-light"><i className="bi bi-box-arrow-up-right"></i> Live Demo</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 y 3 similares... (puedes copiar y modificar) */}
          {/* Te dejo los otros dos si los necesitas completos */}
        </div>
      </div>
    </section>
  );
};

export default Projects;