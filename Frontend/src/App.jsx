
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Upload from "./Pages/Upload";
import Contact from "./Pages/Contact";
import Auth from "./Pages/Auth";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />

      </Routes>
    </>
  );
}

export default App;