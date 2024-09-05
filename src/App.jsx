import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Price from "./components/Price";
import Testimonial from "./components/Testimonial";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection/>
        <Workflow/>
        <Price/>
        <Testimonial/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
