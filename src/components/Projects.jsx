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
    title: "Sales Monitoring Application",
    image: "/esmockup.png",
    description:
      "A sales monitoring application for a local seafood supplier business. Includes theme toggle, CRUD function, sales and profit, live charts and graphs for business analytics.",
    link: "https://one-ocean.vercel.app",
    logo: "/eslogo.png",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "TypeScript"],
    extra: "Built for Etts Seafood. (This Version is a clone only)",
    showcaseImages: [
      "/showcase/es-2.png",
      "/showcase/es-1.png",
      "/showcase/es-3.png",
      "/showcase/es-4.png",
      "/showcase/es-5.png",
      "/showcase/es-6.png",
      "/showcase/es-7.png",
      "/showcase/es-8.png",
    ],
  },
  {
    title: "Enrollment Management System",
    image: "/mtcmock.png",
    description:
      "A responsive web app for a TESDA-accredited training center. Includes course enrollment, student registration, and admin dashboard.",
    link: "https://mtc-ph.vercel.app",
    logo: "/mtclogo.png",
    tags: ["Next.js", "Tailwind CSS", "Strapi"],
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
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "ShadCN"],
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
    images: ["/other/coffee-1.png", "/other/coffee-2.png"],
    title: "Kiosk UI Mockup",
    desc: "UI design for a coffee shop kiosk.",
  },
  {
    images: ["/other/logo-1.png", "/other/logo-2.png"],
    title: "Brand Logo Design",
    desc: "Logos for different brands.",
  },
  
  {
    images: ["/other/other-3.png","/other/other-4.png", "/other/other-5.png","/other/other-1.png", "/other/other-2.png"],
    title: "Marketing Materials",
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
              className="rounded-xl overflow-hidden min-h-[400px] flex flex-col md:flex-row bg-black pt-12 pb-10 pr-10"
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
                  className="w-full max-h-[500px] object-cover rounded-xl"
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
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full p-2 shadow-md"
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
              <div className="border-t border-white/30 w-full mt-5 mb-5" />
            )}
          </Fragment>
        ))}
      </div>

      {/* OTHER PROJECTS SECTION */}

              {/* FIGMA DESIGNS SECTION */}
      <section className="mt-24 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Figma Designs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {[
            {
              title: "Webpage UI",
              image: "/other/figma-1.png",
              desc: "A webpage for a local coffee shop.",
              link: "https://www.figma.com/proto/gsuWyHQ5NRUtop3PWMRJY4/Sunset-Coffee?page-id=0%3A1&node-id=2-2&p=f&viewport=172%2C178%2C1.12&t=SwpRXOAxf5BtrVbu-1&scaling=scale-down&content-scaling=fixed",
            },
            {
              title: "Sports Team Website UI",
              image: "/other/figma-2.png",
              desc: "Fanmade website design for The Golden State Warriors.",
              link: "https://www.figma.com/proto/e7YXmSrSKpASxSihUYaXVi/Warriors?page-id=0%3A1&node-id=1-2&p=f&viewport=1736%2C1791%2C0.73&t=UYHl5Vqgl7XqOOmH-1&scaling=scale-down&content-scaling=fixed",
            },
            {
              title: "Mobile App UI",
              image: "/other/figma-3.png",
              desc: "Design for a shoe brand online shopping app.",
              link: "https://www.figma.com/proto/3uLLSIGjozZNPwJTQE6mzW/Untitled?page-id=0%3A1&node-id=1-10&p=f&viewport=839%2C711%2C0.5&t=6ZJyCm1RrfJNrxQM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A10",
            },
          ].map((design, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-black rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h4 className="text-lg font-semibold">{design.title}</h4>
                <p className="text-sm text-brand-lightbg/70">{design.desc}</p>
                {design.link && (
                  <a
                    href={design.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold hover:underline"
                  >
                    View in Figma <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </section>
       {/* CONTINUOUS SCROLLING IMAGE STRIP */}
      <section className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Posters
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 80, // adjust speed here
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[ 
              "/other/poster-1.png",
              "/other/poster-2.png",
              "/other/poster-3.png",
              "/other/poster-4.png",
              "/other/poster-5.png",
            ].concat([
              "/other/poster-1.png",
              "/other/poster-2.png",
              "/other/poster-3.png",
              "/other/poster-4.png",
              "/other/poster-5.png",
            ]) 
              .map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Scrolling Showcase ${i + 1}`}
                className="h-[600px] w-auto rounded-lg shadow border border-white/10 object-contain"
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>
      </section>
      {/* CONTINUOUS SCROLLING IMAGE STRIP */}
      <section className="mt-10">
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 80, // adjust speed here
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[ 
              "/other/poster-6.png",
              "/other/poster-7.png",
              "/other/poster-8.png",
              "/other/poster-9.png",
              "/other/poster-10.png",
            ].concat([
              "/other/poster-6.png",
              "/other/poster-7.png",
              "/other/poster-8.png",
              "/other/poster-9.png",
              "/other/poster-10.png",
            ]) 
              .map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Scrolling Showcase ${i + 1}`}
                className="h-[600px] w-auto rounded-lg shadow border border-white/10 object-contain"
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>
      </section>
<section className="mt-24">
  <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Other Designs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {otherProjects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-black p-4 rounded-xl shadow-md flex flex-col items-start gap-3 relative"
            >
              <div className="relative w-full aspect-[5/5] overflow-hidden rounded-lg">
     <img
  src={item.images[imageIndices[idx]]}
  alt={item.title}
  className="w-full h-full object-contain rounded-lg"
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
        </div></section>
      
        </section>
  );
};

export default Projects;
