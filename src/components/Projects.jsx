import React, { Fragment, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// MAIN PROJECTS DATA
const projects = [
  {
    title: "Portfolio Website",
    image: "/portfoliomock.png",
    description:
      "A fully responsive personal portfolio built with React and Tailwind CSS to showcase my design and development work.",
    link: "#",
    tags: ["React", "Tailwind CSS", "Lucide"],
    extra:
      "Responsive layout, animated sections, and modern UI built using reusable components.",
    showcaseImages: ["/showcase/portfolio-1.png", "/showcase/portfolio-2.png"],
  },
  {
    title: "Enrollment Management System",
    image: "/mtcmock.png",
    description:
      "A responsive web app for a TESDA-accredited training center. Includes course enrollment, student registration, and admin dashboard.",
    link: "https://mtc-ph.vercel.app",
    logo: "/mtclogo.png",
    tags: ["NextJS", "Tailwind CSS", "Strapi"],
    extra: "Built for Mechatronics Technologies Corporation.",
    showcaseImages: [
      "/showcase/mtc-1.png",
      "/showcase/mtc-2.png",
      "/showcase/mtc-3.png",
      "/showcase/mtc-4.png",
      "/showcase/mtc-5.png",
      "/showcase/mtc-6.png",
      "/showcase/mtc-7.png",
      "/showcase/mtc-8.png",
    ],
  },
  {
    title: "E-Commerce Web App",
    image: "/rscmock.png",
    description:
      "An e-commerce platform for product listings, cart system, checkout process and full order management functions. It comes with a driver side application for updating order status.",
    link: "https://rsc-online.vercel.app",
    logo: "/rsclogo.png",
    tags: ["NextJS", "Tailwind CSS", "PostgreSQL", "ShadCN"],
    extra: "Built for Rhodesian Sales Corporation.",
    showcaseImages: [
      "/showcase/rsc-1.png",
      "/showcase/rsc-2.png",
      "/showcase/rsc-3.png",
      "/showcase/rsc-4.png",
      "/showcase/rsc-5.png",
      "/showcase/rsc-6.png",
      "/showcase/rsc-7.jpg",
      "/showcase/rsc-8.jpg",
    ],
  },
];

// OTHER PROJECTS DATA (multiple images support)
const otherProjects = [
  {
    images: ["/other/graphic-2.png", "/other/graphic-1.png"],
    title: "Mobile UI Mockup",
    desc: "A clean and modern UI design for a shoe brand.",
  },
  {
    images: ["/other/logo-1.png", "/other/logo-2.png"],
    title: "Brand Logo Design",
    desc: "Logos for different brands.",
  },
  {
    images: ["/other/coffee-1.png", "/other/coffee-2.png"],
    title: "Kiosk UI Mockup",
    desc: "UI design for a coffee shop kiosk.",
  },
  {
    images: ["/other/other-3.png", "/other/other-1.png", "/other/other-2.png"],
    title: "Other designs",
    desc: "Graphic design for advertisements, promotions and etc.",
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [imageIndices, setImageIndices] = useState(
    otherProjects.map(() => 0)
  );

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleNext = (idx) => {
    setImageIndices((prev) =>
      prev.map((val, i) =>
        i === idx ? (val + 1) % otherProjects[i].images.length : val
      )
    );
  };

  const handlePrev = (idx) => {
    setImageIndices((prev) =>
      prev.map((val, i) =>
        i === idx
          ? (val - 1 + otherProjects[i].images.length) %
            otherProjects[i].images.length
          : val
      )
    );
  };

  return (
    <section
      id="projects"
      className="bg-brand-darktop text-brand-lightbg py-24 px-6 sm:px-10 md:px-20 lg:px-72 xl:px-96 relative z-10"
    >
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
      </div>

      <div className="grid gap-10">
        {projects.map((project, index) => (
          <Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-xl overflow-hidden shadow-lg min-h-[400px] flex flex-col md:flex-row"
            >
              {/* IMAGE */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-6 flex justify-center items-center md:w-1/2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full max-h-[500px] object-cover rounded-xl shadow-md"
                />
              </a>

              {/* TEXT */}
              <div className="p-4 sm:p-6 pt-4 md:pt-8 flex flex-col justify-start md:w-1/2">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-lightbg/80 mb-4">
                      {project.description}
                    </p>
                  </div>
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={`${project.title} Logo`}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain bg-white rounded-full p-2 shadow-md"
                    />
                  )}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-sm sm:text-base text-brand-accent mb-4"
                >
                  VISIT WEBSITE <ArrowUpRight strokeWidth={3} />
                </a>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white/10 text-sm px-3 py-2 rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => toggleExpand(index)}
                  className="text-brand-accent/80 text-sm inline-flex items-center gap-1 font-semibold hover:underline"
                >
                  {expandedIndex === index ? (
                    <>
                      Hide Showcase <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      View Showcase <ChevronDown size={16} />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 overflow-hidden text-sm text-brand-lightbg/70"
                    >
                      {project.extra && <p className="mb-4">{project.extra}</p>}

                      {project.showcaseImages && (
                        <div className="relative w-full overflow-hidden">
                          <motion.div
                            className="flex gap-4 w-max"
                            animate={{
                              x: ["0%", "-50%"],
                            }}
                            transition={{
                              duration: project.showcaseImages.length * 7,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            {[...project.showcaseImages, ...project.showcaseImages].map(
                              (img, i) => {
                                const isSmall =
                                  img.includes("rsc-7") || img.includes("rsc-8");

                                return (
                               <img
  key={i}
  src={img}
  alt={`Showcase ${i + 1}`}
className={`rounded-lg border border-white/10 shadow ${
  isSmall ? "w-1/2 sm:w-1/4" : "w-full sm:w-3/4"
} h-auto max-h-80 mx-auto`}
  loading="lazy"
/>

                                );
                              }
                            )}
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {index !== projects.length - 1 && (
              <div className="border-t border-white/30 w-full mt-10" />
            )}
          </Fragment>
        ))}
      </div>

      {/* OTHER PROJECTS SECTION */}
      <section className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Other Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {otherProjects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 p-4 rounded-xl shadow-md flex flex-col items-start gap-3 relative"
            >
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg border border-white/10">
                <img
                  src={item.images[imageIndices[idx]]}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {item.images.length > 1 && (
                  <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2 -translate-y-1/2">
                    <button
                      onClick={() => handlePrev(idx)}
                      className="bg-black/60 text-white p-1 rounded-full hover:bg-black/60"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => handleNext(idx)}
                      className="bg-black/60 text-white p-1 rounded-full hover:bg-black/60"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>

              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm text-brand-lightbg/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Projects;
