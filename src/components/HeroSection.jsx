import { EVENT_INFO } from "../constants";
import finastra from "../assets/finastra_boardroom.png";
import Fi from "../assets/Fi.jpg";

const HeroSection = () => {
  return (
    
    <section className="relative bg-blue-950 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
      
  
        <p className="text-lg mb-6 text-gray-400">Organized By</p>
        <img
          src={finastra}
          alt="Finastra Logo"
          className="h-16 mb-12 transition-transform transform hover:scale-110 duration-300 ease-in-out"
          loading="lazy"
        />
        <h1 className="text-balance md:text-6xl font-bold mb-8 leading-tight">
        <section id="event-overview"/>
          {EVENT_INFO.title}
        </h1>
        <div className="space-y-2 mb-12 text-gray-400">
          <p className="text-xl">Date: {EVENT_INFO.date}</p>
          <p className="text-xl">Time: {EVENT_INFO.time}</p>
          <p className="text-xl">Location: {EVENT_INFO.location}</p>
        </div>
        <img
          src={Fi}
          alt="Event Banner"
          className="rounded-2xl shadow-xl w-full max-w-3xl mt-8 transition-transform transform hover:scale-105 duration-300 ease-in-out"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;