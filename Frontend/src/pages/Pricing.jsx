function Pricing() {
  const pricingData = [
    {
      type: "Black & White Print",
      price: "₹2 / Page"
    },
    {
      type: "Color Print",
      price: "₹10 / Page"
    },
    {
      type: "Spiral Binding",
      price: "₹50"
    },
    {
      type: "Hard Binding",
      price: "₹200"
    }
  ];

  return (
    <section className="pricing-section">
      <h2>Pricing Plans</h2>

      <div className="pricing-container">
        {pricingData.map((item, index) => (
          <div className="pricing-card" key={index}>
            <h3>{item.type}</h3>
            <h1>{item.price}</h1>
            <button>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;