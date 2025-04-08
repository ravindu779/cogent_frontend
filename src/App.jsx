import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutEvent from "./components/AboutEvent";
import EventHighlights from "./components/EventHighlights";
import EventDetails from "./components/EventDetails";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import Footer from "./components/Footer";


  const App = () => {
    return (
      <div>
        <Navbar />
        <HeroSection />
        <AboutEvent />
        <EventHighlights />
        <EventDetails />
        <About />
        <ContactForm />
        <Footer />
      </div>
    );
}
export default App;
