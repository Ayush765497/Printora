import { FaPrint, FaTruck, FaClock, FaShieldAlt } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaPrint />,
      title: "High Quality Printing",
      desc: "Premium quality black & white and color printing."
    },
    {
      icon: <FaTruck />,
      title: "Doorstep Delivery",
      desc: "Get your printed documents delivered to your location."
    },
    {
      icon: <FaClock />,
      title: "Fast Service",
      desc: "Same day printing available for urgent orders."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Upload",
      desc: "Your files remain private and secure."
    }
  ];

  return (
    <section className="features">
      <h2>Why Choose Printora?</h2>

      <div className="feature-container">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;