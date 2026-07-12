import heroImg from "../assets/hero.png";
import { Link } from "react-router-dom";
import Features from "../components/Features";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-left">
          <h1>
            Print Smart,
            <br />
            <span>Study Better.</span>
            </h1>

          <p>
            Upload notes, assignments and projects in seconds.
            Choose paper size and get premium quality printing
            delivered to your doorstep.
          </p>

          <div className="hero-buttons">
            <Link to="/upload">
              <button className="primary-btn">
                Upload Documents
              </button>
            </Link>

            <Link to="/pricing">
              <button className="secondary-btn">
                View Pricing
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Hero" />
        </div>
        </section>

      <div className="hero-badge">
        ⭐ Trusted by 500+ Students
        </div>

      {/* Features Section */}
      <Features />
    </>
  );
}

export default Home;