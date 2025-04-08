import { AGENDA, SPEAKERS } from "../constants";
import { useState } from 'react';

const EventDetails = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <section id="agenda" className="py-20 bg-purple-400">
      <div className="container mx-auto px-6">
        <div id="speakers">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#021E40] mb-4 hover:shadow-2xl hover:bg-purple-400 ">
            {SPEAKERS.title}
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-500 mb-12">
            {SPEAKERS.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPEAKERS.list.map((speaker) => (
              <div
                key={speaker.id}
                onClick={() => setSelectedSpeaker(speaker)}
                className="group bg-white rounded-2xl shadow hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="w-full aspect-[3/4] overflow-hidden p-2">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-[#021E40] mb-1">{speaker.name}</h3>
                  <p className="text-sm text-gray-600">{speaker.title}</p>
                  <p className="text-sm text-gray-500">{speaker.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 mt-20 flex flex-col items-center">
        
  
          <h2 className="text-6xl sm:text-4xl font-extrabold text-center text-[#400230] mb-4">
          
            {AGENDA.title}
          </h2>
          
          <div className="relative border-l-4 border-[#021E40] space-y-10 pl-6 w-full max-w-4xl">
          <section id="agenda"/>
            {AGENDA.items.map((item, index) => (
              <div key={index} className="relative group bg-white shadow-md border border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-transparent hover:scale-105">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-[#021E40] border-4 border-white shadow-lg"></div>
                <div className="md:flex justify-between items-start">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <p className="text-[#021E40] font-semibold text-lg">{item.time}</p>
                    {item.type === "registration" && (
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        Registration
                      </span>
                    )}
                  </div>
                  <div className="md:w-3/4 space-y-2">
                    <h3 className="text-xl font-semibold text-[#021E40]">{item.title}</h3>
                    {item.speaker && (
                      <p className="text-sm text-gray-600">{item.speaker}</p>
                    )}
                    {Array.isArray(item.speakers) && (
                      <div className="space-y-1">
                        {item.speakers.map((sp, i) => (
                          <p key={i} className="text-sm text-gray-600">{sp}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedSpeaker && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full shadow-xl overflow-y-auto max-h-[90vh]">
              <div className="flex justify-between items-start p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-[#021E40]">{selectedSpeaker.name}</h3>
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="rounded-xl w-full max-h-[500px] object-contain mx-auto"
                  />
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-semibold text-[#021E40]">{selectedSpeaker.title}</h4>
                  <p className="text-sm text-gray-500 mb-4">{selectedSpeaker.company}</p>
                  <p className="text-gray-700 leading-relaxed">{selectedSpeaker.bio}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventDetails;