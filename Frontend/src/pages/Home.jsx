import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Print Smart, Study Better</h1>

        <p>
          Upload your documents, customize printing options,
          and get high-quality prints delivered to your doorstep.
        </p>

        <Link to="/upload">
          <button>Upload Documents</button>
        </Link>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="Hero" />
      </div>
    </section>
  );
}

export default Home;