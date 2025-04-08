import { BENEFITS } from "../constants.js";
import Fi2 from "../assets/Fi2.jpg";

const EventHighlights = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
  <div className="container mx-auto px-4 md:px-0 max-w-5xl">
    <div className="bg-[#112555] rounded-3xl p-2 shadow-lg md:flex">
          {/* Image Section */}
          <div className="md:w-auto px-10 md:mt-28">
            <img 
              src={Fi2} 
              alt="Event Benefits"
              className="rounded-3xl shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>

          {/* Benefits Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Event Highlights</h2>

            <ul className="space-y-4">
              {BENEFITS.items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center space-x-4 bg-slate-100 bg-opacity-10 hover:bg-opacity-20 transition duration-300 rounded-xl p-4"
                >
                  <img 
                    src={item.icon} 
                    alt={item.text}
                    className="w-12 h-12 rounded-full bg-slate-900 p-2"
                  />
                  <span className="text-lg font-semibold">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
