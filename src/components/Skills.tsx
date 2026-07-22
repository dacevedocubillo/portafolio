const Skills = () => {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-subtitle">TECHNICAL SKILLS</h6>
          <h2 className="section-title">Technologies I Work With</h2>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="skill-card">
              <i className="bi bi-code-slash"></i>
              <h4>Languages</h4>
              <ul>
                <li>C#</li>
                <li>Python</li>
                <li>SQL</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="skill-card">
              <i className="bi bi-server"></i>
              <h4>Backend</h4>
              <ul>
                <li>ASP.NET Core</li>
                <li>ASP.NET MVC</li>
                <li>Entity Framework</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="skill-card">
              <i className="bi bi-database"></i>
              <h4>Database</h4>
              <ul>
                <li>SQL Server</li>
                <li>T-SQL</li>
                <li>Database Design</li>
                <li>CRUD Operations</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="skill-card">
              <i className="bi bi-tools"></i>
              <h4>Tools</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>ServiceNow</li>
                <li>Microsoft 365</li>
                <li>Active Directory</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;