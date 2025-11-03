import MotionHoc from "./MotionHoc";
import { motion } from "framer-motion";
import { ChevronUp, Sparkles } from "lucide-react";
import ProductionModal from "../components/productionModal";
import { useEffect, useState } from "react";

const HomeComponent = () => {
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("seenProductionModal");
    if (!hasSeenModal) {
      setShowModal(true);
      sessionStorage.setItem("seenProductionModal", "true");
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between py-10 bg-transparent overflow-hidden">
      {/* Floating glow particles */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-400/40 rounded-full blur-md"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-cyan-400/50 rounded-full blur-sm"
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.7, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
            <ProductionModal isOpen={showModal} onClose={() => setShowModal(false)} />
      {/* Center Content */}
      <div className="flex flex-col items-center justify-center text-center px-6 mt-10">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pb-10 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-[#007aff] via-[#00c6ff] to-[#007aff] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,122,255,0.2)]"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Luqman
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-700 text-lg md:text-xl mt-4 max-w-2xl"
        >
          React.js & React Native Developer — crafting seamless interfaces and powerful real-time apps that connect ideas with innovation.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow-md hover:shadow-blue-400/40 hover:scale-105 transition-transform duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-blue-400 text-blue-600 font-medium hover:bg-blue-50/50 hover:scale-105 transition-transform duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Bottom Info Cards */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray-800 bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6 hover:shadow-blue-200 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-blue-500" size={24} />
              <h3 className="text-xl font-semibold">About Me</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              A passionate developer with 2+ years of experience in frontend development, turning ideas into visually stunning and high-performing products.
            </p>
          </motion.div>

          {/* My Stack */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-gray-800 bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6 hover:shadow-blue-200 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <ChevronUp className="text-blue-500 -rotate-45" size={28} />
              <h3 className="text-xl font-semibold">Tech Stack</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Expert in React.js, React Native, Next.js, Tailwind CSS, Redux Toolkit, Firebase, and Node.js — with experience in real-time and scalable systems.
            </p>
          </motion.div>

          {/* Current Work */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-gray-800 bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6 hover:shadow-blue-200 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <ChevronUp className="text-blue-500 -rotate-45" size={28} />
              <h3 className="text-xl font-semibold">What I’m Doing</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Currently building modern products at <span className="font-semibold text-blue-600">Adroid IT Solutions</span>, focusing on UI/UX excellence and smooth app performance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Home = MotionHoc(HomeComponent);
export default Home;
