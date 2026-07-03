function Services() {
  const servicesData = [
    {
      title: "Document Printing",
      description: "High quality black & white and color printouts."
    },
    {
      title: "Thesis Binding",
      description: "Professional spiral and hard binding services."
    },
    {
      title: "Color Printing",
      description: "Premium color printing with best paper quality."
    },
    {
      title: "Resume Printing",
      description: "Get your resumes printed on premium sheets."
    }
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;