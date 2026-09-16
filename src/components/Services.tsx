const services = [
  { icon: 'bi-window', title: 'Business Websites', text: 'Responsive, professional websites for small businesses and independent professionals, built to look great on desktop and mobile.' },
  { icon: 'bi-code-square', title: 'Web Development', text: 'Custom front-end and web solutions using HTML, CSS, JavaScript, React, Bootstrap, C# and SQL.' },
  { icon: 'bi-tools', title: 'Website Updates & Maintenance', text: 'Content updates, responsive improvements, bug fixes and ongoing maintenance for existing websites.' },
];

const Services = () => (
  <section id="services" className="services section-padding">
    <div className="container">
      <div className="text-center mb-5">
        <h6 className="section-subtitle">FREELANCE SERVICES</h6>
        <h2 className="section-title">How I Can Help</h2>
        <p className="section-description">I build practical, user-friendly web experiences for small businesses and professionals.</p>
      </div>
      <div className="row g-4">
        {services.map((service) => (
          <div className="col-md-6 col-lg-4" key={service.title}>
            <div className="service-card"><i className={`bi ${service.icon}`}></i><h3>{service.title}</h3><p>{service.text}</p></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Services;
