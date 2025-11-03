import MotionHoc from "./MotionHoc";

import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Kroolo",
      description:
        "A complete project and work management platform with real-time task updates, analytics, and smooth collaboration.",
      tech: ["Next.js", "Redux Toolkit", "Tailwind CSS", "Node.js"],
      link: "#",
    },
    {
      name: "ChirpByte",
      description:
        "Real-time chat and community platform built with Socket.io and Firebase — focusing on smooth interaction and modern UI.",
      tech: ["React", "Firebase", "Socket.io", "Express"],
      link: "#",
    },
    {
      name: "Skip2Beat",
      description:
        "A modern gym and fitness tracking app built with React Native, integrating real-time progress tracking and social challenges.",
      tech: ["React Native", "Redux", "Expo", "Firebase"],
      link: "#",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-transparent py-16 px-6 overflow-hidden">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent mb-12"
      >
        Featured Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="relative group bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Hover Overlay */}
            <motion.a
              href={project.link}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-5 right-6 text-blue-600 text-sm font-medium hover:underline"
            >
              View Project →
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Floating glow animation (for visual depth) */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

const Team = MotionHoc(ProjectsSection);

export default Team;
