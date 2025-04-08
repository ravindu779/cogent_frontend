import { EVENT_INFO } from "../constants.js";


const AboutEvent = () => {
  return (

    <section id="overview" className="py-20 bg-[#f9f6f1]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Title Section */}
          <div className="md:w-1/3">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4 border-l-4 border-orange-500 pl-4">
              Event Overview
            </h2>
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed hover:text-orange-500 transition duration-300">
              {EVENT_INFO.description}
            </p>
            {EVENT_INFO.details.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-700 leading-relaxed hover:text-orange-500 transition duration-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;