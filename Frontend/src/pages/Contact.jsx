function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Email: support@printora.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: Ghaziabad, Uttar Pradesh, India</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <textarea
            placeholder="Enter Your Message"
            rows="5"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;