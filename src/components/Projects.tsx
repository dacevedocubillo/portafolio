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
                <h3>Business Management System</h3>
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
                <h3>Administrative Website for a Family Business</h3>
                <p>Developed an administrative web application for a real
                  business using C#, ASP.NET MVC, ASP.NET Core, SQL
                  Server, Entity Framework, HTML, CSS, Bootstrap, and
                  JavaScript.</p>
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
                <h3>Business Management System</h3>
                <p>Full-stack web application developed with ASP.NET Core and SQL Server...</p>
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

          {/* Project 2 y 3 similares... (puedes copiar y modificar) */}
          {/* Te dejo los otros dos si los necesitas completos */}
        </div>
      </div>
    </section>
  );
};

export default Projects;