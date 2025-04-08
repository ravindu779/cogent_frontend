import { ABOUT_FINASTRA } from "../constants.js";
import { motion } from "framer-motion";

const AboutFinastra = () => {
  return (
    <section className="bg-black py-16 px-6">
      <motion.div
        className="max-w-3xl mx-auto bg-[#111] p-10 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          About Finastra
        </h2> 

        <p className="text-white text-lg leading-relaxed text-center">
          {ABOUT_FINASTRA.description.split('\n\n')[0]}
        </p>
        <p className="text-white text-lg leading-relaxed mt-4 text-center">
          {ABOUT_FINASTRA.description.split('\n\n')[1]}
        </p>
      </motion.div>
    </section>
  );
};

export default AboutFinastra;
