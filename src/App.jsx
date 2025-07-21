import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import CurriculumTabs from "./CurriculumTabs";
import GetCertified from "./GetCertified";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Highlights />
      <CurriculumTabs />
      <GetCertified />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
