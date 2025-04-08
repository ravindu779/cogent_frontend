import {
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  
  import award1 from "../assets/award1.png";
  import award2 from "../assets/award2.png";
  import award03 from "../assets/award03.png";
  import award4 from "../assets/award4.png";
  
  const Footer = () => {
    return (
      <footer className="bg-black text-white pt-16 pb-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Company Info + Awards */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Cogent Solutions™</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
                Through our conferences we transform your business challenges into opportunities.
                Our clients and customers are leading government entities and the fortune 500 companies.
              </p>
  
              <h4 className="text-2xl font-semibold mb-4">Awards</h4>
              <div className="flex flex-wrap items-center gap-4">
                <img src={award1} alt="Award 1" className="h-16 object-contain" />
                <img src={award2} alt="Award 2" className="h-16 object-contain" />
                <img src={award03} alt="Award 3" className="h-16 object-contain" />
                <img src={award4} alt="Award 4" className="h-16 object-contain" />
              </div>
            </div>
  
            {/* Right Column - Office Info */}
            <div>
              <h4 className="text-2xl font-semibold mb-6">Our office</h4>
              <ul className="space-y-5 text-gray-300 text-sm">
                <li className="flex items-start gap-4 group">
                  <FaMapMarkerAlt className="mt-1 text-2xl text-gray-400 group-hover:text-white transition" />
                  <span>
                    <strong>Middle East & Africa HQ</strong><br />
                    Office No: 209, The Metropolis Tower, Business Bay, Dubai, United Arab Emirates
                  </span>
                </li>
                <li className="flex items-start gap-4 group">
                  <FaMapMarkerAlt className="mt-1 text-2xl text-gray-400 group-hover:text-white transition" />
                  <span>
                    <strong>Asia Pacific HQ</strong><br />
                    7th floor Green Lanka Tower, Colombo, Sri Lanka
                  </span>
                </li>
                <li className="flex items-start gap-4 group">
                  <FaMapMarkerAlt className="mt-1 text-2xl text-gray-400 group-hover:text-white transition" />
                  <span>
                    <strong>Saudi Arabia HQ</strong><br />
                    Riyadh, Saudi Arabia
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <FaPhone className="text-2xl text-gray-400 hover:text-white transition" />
                  <span>+971 50 5718867</span>
                </li>
                <li className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl text-gray-400 hover:text-white transition" />
                  <span>partnerships@cogentsolutions.ae</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6 text-sm text-gray-500">
            {/* Copyright */}
            <div className="mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} Cogent Solutions Event Management LLC. All Right Reserved
            </div>
  
            {/* Social Links - With Circular Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-white hover:bg-blue-600 hover:text-black transition duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>
              
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-white hover:bg-blue-600 hover:text-black transition duration-300"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/cs_event_management/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-white hover:bg-blue-600 hover:text-black transition duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-white hover:bg-blue-600 hover:text-black transition duration-300"
              >
                <FaTwitter className="text-xl" />
              </a>

            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  