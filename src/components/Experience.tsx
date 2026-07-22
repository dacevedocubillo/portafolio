const Experience = () => {
  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-subtitle">EXPERIENCE</h6>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="bi bi-briefcase-fill"></i>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2023 - Present</span>
              <h3>Service Desk Agent</h3>
              <h5>Fujitsu</h5>
              <p>
                Provide technical support in a multinational corporate environment,
                ensuring business continuity while troubleshooting Windows,
                Microsoft 365, Active Directory, and enterprise applications.
              </p>
              <ul>
                <li>Provide technical support to users by troubleshooting hardware, software, and system-related issues.</li>
                <li>Analyze and resolve technical incidents while following established support procedures.</li>
                <li>Assist users with problem resolution, ensuring effective communication and customer satisfaction.</li>
                <li>Document incidents, solutions, and troubleshooting steps to improve support processes.</li>
                <li>Collaborate with internal teams to escalate and resolve complex technical issues.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;