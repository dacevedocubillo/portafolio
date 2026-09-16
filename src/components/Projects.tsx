const projects = [
  { icon:'bi-window-stack', title:'Administrative Website for a Family Business', type:'Full-Stack Academic Project', description:'A business management web application designed to centralize administrative information and support day-to-day operations with maintainable, database-driven functionality.', tech:['C#','ASP.NET Core/MVC','SQL Server','Entity Framework','JavaScript'], repo:'https://github.com/dacevedocubillo/WebAdminSystem' },
  { icon:'bi-calendar2-check', title:'Vacation Management System', type:'Full-Stack Academic Project', description:'A web application for managing employee vacation requests and business workflows, backed by a relational database and server-side application logic.', tech:['C#','ASP.NET MVC','SQL Server','Entity Framework'], repo:'https://github.com/dacevedocubillo/VAP-Manager' },
  { icon:'bi-shop', title:'Alura Geek', type:'Front-End Project', description:'A responsive storefront-style web experience focused on clean layouts, reusable interface patterns and fundamental front-end development practices.', tech:['HTML','CSS','Responsive Design'], repo:'https://github.com/dacevedocubillo/Alura-Geek' },
];
const Projects = () => (
  <section id="projects" className="projects section-padding"><div className="container">
    <div className="text-center mb-5"><h6 className="section-subtitle">PORTFOLIO</h6><h2 className="section-title">Featured Projects</h2><p className="section-description">Projects that demonstrate my experience building responsive interfaces, business applications and database-driven solutions.</p></div>
    <div className="row g-4">{projects.map((project)=><div className="col-lg-4" key={project.title}><article className="project-card">
      <div className="project-visual"><i className={`bi ${project.icon}`}></i></div><div className="project-content"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p>
      <div className="project-tech">{project.tech.map(item=><span key={item}>{item}</span>)}</div><div className="project-buttons"><a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-primary"><i className="bi bi-github"></i> View Code</a></div></div>
    </article></div>)}</div>
  </div></section>
);
export default Projects;
