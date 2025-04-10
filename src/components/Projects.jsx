import { TEXTS } from "../constants";
import { motion } from "framer-motion";

const Projects = ({ currentLanguage }) => {
  const { PROJECTS } = TEXTS[currentLanguage || "en"];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {currentLanguage === "fr" ? "Projets" : "Projects"}
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
            
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3" // Changed from lg:w-1/4 to lg:w-1/3 for larger width
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-shadow scale-100 transform" // Added scale-150
                style={{ transformOrigin: 'left center' }} // Keeps image aligned left while scaling
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/3 lg:pl-12" // Adjusted widths and padding
            >
              <h3 className="text-2xl font-bold text-purple-100 mb-2">
                {project.title}
              </h3>
              
              <p className="mb-4 text-neutral-300 leading-relaxed">
                {project.description}
              </p>

              {project.features && (
                <div className="mb-4">
                  <h4 className="font-semibold text-purple-200 mb-2">
                    {currentLanguage === "fr" ? "Fonctionnalités clés" : "Key Features"}
                  </h4>
                  <ul className="list-disc pl-5 text-neutral-400 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-neutral-900 text-sm font-medium text-purple-400 border border-purple-900/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;