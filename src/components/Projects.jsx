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
    gradient: 'linear-gradient(135deg, #004080, #00264d)',
    image: "/etsmockup.png",
    description:
      "A sales monitoring application for a local seafood supplier business. Includes theme toggle, CRUD function, sales and profit, live charts and graphs for business analytics. (Website cant be visited due to business privacy)",
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
    gradient: 'linear-gradient(135deg, #0a1a2f, #0f3c63)',
    image: "/mtcmockup.png",
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
    gradient: 'linear-gradient(135deg, #0f3d2e, #1b5e3c)',
    image: "/rscmockup.png",
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

const brandCaseStudies = [
  {
    brand: "Yappari Steak",
    thumbnail: "/brands/YappariBrandBoard.png",
    description:
      "Yappari Steak delivers sizzling lava-plate steaks inspired by Japanese grilling traditions, served in a vibrant and modern setting.",
    images: [
      "/brands/YappariCarouselFull.png",

    ],
  },
  {
    brand: "Atua Midtown Cebu",
    thumbnail: "/brands/AtuaBrandBoard.png",
    description:
      "ATÚA Midtown Cebu is a creative lifestyle destination where community, culture, and local brands come together in Midtown Cebu.",
    images: [
      "/brands/AtuaCarouselFull.png",
    ],
  },
];

// OTHER PROJECTS DATA (multiple images support)
const clientProjects = [
  {
    images: ["/other/POM 1.png"],
  },
  {
    images: ["/other/POM 2.png"],
  },
  
  {
    images: ["/other/LVS.png"],
  },
   {
    images: ["/other/LVS (2).png"],
  },
  {
    images: ["/other/BLR.png"],
  },
   {
    images: ["/other/BLR (2).png"],
  },
    {
    images: ["/other/BLR (3).png"],
  },
   {
    images: ["/other/BLR (4).png"],
  },
  {
    images: ["/other/BLR (5).png"],
  },
  {
    images: ["/other/BLR (6).png"],
  },
   {
    images: ["/other/BLR (7).png"],
  },
  {
    images: ["/other/LVS (3).png"],
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
  const [expandedBrand, setExpandedBrand] = useState(null);


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
  <>
    <section
  id="projects"
  className="bg-brand-darktop text-brand-lightbg px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 relative z-10"
>
  {/* MAIN GRID */}
  <div className="grid gap-16">
    {/* ================= LEFT COLUMN — WEB DEV PROJECTS ================= */}
    <div>
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
          Web Development
        </h2>
      </div>

      <div className="space-y-12 sm:space-y-16">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl"
              style={{ background: project.gradient }}
            >
              {/* LEFT — Content */}
              <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-6 text-white">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={`${project.title} Logo`}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-md p-1 sm:p-2"
                    />
                  )}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 sm:mt-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full
                               bg-white/15 backdrop-blur-md
                               border border-white/25
                               text-white font-semibold text-sm
                               hover:bg-white/25 transition-all shadow-lg"
                  >
                    Visit Project
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mt-2 sm:mt-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Toggle */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-2 sm:mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-white transition"
                >
                  {isExpanded ? (
                    <>Hide Showcase <ChevronUp size={16} /></>
                  ) : (
                    <>View Showcase <ChevronDown size={16} /></>
                  )}
                </button>

                {/* Showcase */}
                <AnimatePresence>
                  {isExpanded && project.showcaseImages && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 sm:mt-6 overflow-hidden"
                    >
                      <div className="relative w-full overflow-x-auto">
                        <motion.div
                          className="flex gap-4 w-max"
                          animate={{ x: ["0%", "-50%"] }}
                          transition={{
                            duration: project.showcaseImages.length * 7,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          {[...project.showcaseImages, ...project.showcaseImages].map(
                            (img, i) => (
                              <img
                                key={i}
                                src={img}
                                alt={`Showcase ${i + 1}`}
                                className="max-h-60 sm:max-h-72 rounded-lg border border-white/10 shadow-lg"
                                loading="lazy"
                              />
                            )
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* RIGHT — Mockup */}
              <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex items-center justify-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-cover rounded-2xl hover:scale-[1.02] transition"
                    loading="lazy"
                  />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

        {/* ================= RIGHT COLUMN — FIGMA DESIGNS ================= */}
       <div className="space-y-12 mt-28 mb-10">
  <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
    UI Design
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {[
      {
        title: "Coffee Shop Webpage UI",
        image: "/other/figma-1.png",
        desc: "A landing page concept for a local coffee shop.",
        link: "https://www.figma.com/proto/gsuWyHQ5NRUtop3PWMRJY4/Sunset-Coffee",
      },
      {
        title: "Real Estate Webpage UI",
        image: "/other/figma-4.png",
        desc: "A modern real estate website design.",
        link: "https://www.figma.com/proto/0wNg4xyBhh0zXJwxAcO51P/Untitled",
      },
      {
        title: "Sports Team Website UI",
        image: "/other/figma-2.png",
        desc: "Fan-made website design for the Golden State Warriors.",
        link: "https://www.figma.com/proto/e7YXmSrSKpASxSihUYaXVi/Warriors",
      },
      {
        title: "Shoe Brand Mobile App UI",
        image: "/other/figma-3.png",
        desc: "Mobile shopping app UI for a shoe brand.",
        link: "https://www.figma.com/proto/3uLLSIGjozZNPwJTQE6mzW/Untitled",
      },
    ].map((design, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        className="group relative rounded-2xl overflow-hidden
           bg-white/5 backdrop-blur-lg
           border border-white/10
           shadow-xl
           transition-all duration-500
           hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* IMAGE */}
        <div className="relative h-80 md:h-[26rem] lg:h-[30rem] overflow-hidden">
          <img
            src={design.image}
            alt={design.title}
            className="w-full h-full object-cover object-top
           transition-transform duration-700 ease-out
           group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0" />
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col gap-3 text-white">
          <h4 className="text-xl font-semibold">
            {design.title}
          </h4>

          <p className="text-white/70 text-sm md:text-base">
            {design.desc}
          </p>

          {/* CTA */}
          <a
            href={design.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-white/10 backdrop-blur-md
                       border border-white/20
                       text-white text-sm font-semibold
                       hover:bg-white/20 transition-all w-fit"
          >
            View in Figma
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</div>


      </div>
    </section>
      
{/* ================= BRAND SOCIAL MEDIA POSTS ================= */}
<section className="bg-brand-darktop text-brand-lightbg py-24 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
  <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
    Graphic Design
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {brandCaseStudies.map((brand, idx) => {
      const isExpanded = expandedBrand === idx;

      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-2xl overflow-hidden
                     bg-white/5 backdrop-blur-md border border-white/10
                     shadow-xl transition-all duration-500
                     hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* THUMBNAIL */}
     <div className="relative h-[28rem] md:h-[34rem] lg:h-[40rem] overflow-hidden rounded-2xl">
  <img
    src={brand.thumbnail}
    alt={brand.brand}
    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
    loading="lazy"
  />
  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-opacity duration-500" />
</div>

          {/* CONTENT */}
          <div className="p-6 md:p-8 flex flex-col gap-4 text-white">
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-semibold">{brand.brand}</h3>
              <button
  onClick={() => setExpandedBrand(isExpanded ? null : idx)}
  className="inline-flex items-center gap-2 px-4 py-2 rounded-full
             bg-white/10 backdrop-blur-md border border-white/20
             text-white font-semibold text-sm
             hover:bg-white/20 hover:scale-[1.05]
             transition-all duration-300 shadow-md"
>
  {isExpanded ? (
    <>
      Hide Details <ChevronUp size={16} />
    </>
  ) : (
    <>
      View Details <ChevronDown size={16} />
    </>
  )}
</button>
            </div>

            {/* EXPANDED SHOWCASE */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-4 flex flex-col gap-4"
                >
                  <p className="text-sm text-white/70">{brand.description}</p>

                  <div className="grid grid-cols-1 gap-4">
                    {brand.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${brand.brand} showcase ${i + 1}`}
                        className="rounded-lg border border-white/10 object-cover h-56 md:h-60 w-full"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      );
    })}
  </div>
</section>
{/* ================= GRAPHIC DESIGN — MASONRY ================= */}
<section className="bg-brand-darktop text-brand-lightbg py-24 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
  <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
    {clientProjects.map((item, idx) => (
      <motion.div
        key={idx}
        className="mb-4 break-inside-avoid group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: idx * 0.05 }}
      >
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
        </div>
      </motion.div>
    ))}
  </div>
</section>


{/* ================= POSTERS ================= */}
<section className="bg-brand-darktop text-brand-lightbg py-24 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
  <h2 className="text-3xl md:text-4xl font-bold mb-12">Sports Posters</h2>

  <div className="relative w-full overflow-hidden">
    <motion.div
      className="flex gap-6 w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 80,
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
        "/other/poster-13.png",
      ].concat([
        "/other/poster-1.png",
        "/other/poster-2.png",
        "/other/poster-3.png",
        "/other/poster-4.png",
        "/other/poster-5.png",
        "/other/poster-13.png",
      ]).map((img, i) => (
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

  <div className="relative w-full overflow-hidden mt-10">
    <motion.div
      className="flex gap-6 w-max"
      animate={{ x: ["-50%", "0%"] }}
      transition={{
        duration: 80,
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
        "/other/poster-11.png",
        "/other/poster-12.png",
        "/other/poster-14.png",
      ].concat([
        "/other/poster-6.png",
        "/other/poster-7.png",
        "/other/poster-8.png",
        "/other/poster-9.png",
        "/other/poster-10.png",
        "/other/poster-11.png",
        "/other/poster-12.png",
        "/other/poster-14.png",
      ]).map((img, i) => (
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

{/* ================= OTHER DESIGNS ================= */}
<section className="bg-brand-darktop text-brand-lightbg py-24 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
  <h2 className="text-3xl md:text-4xl font-bold mb-12">Other Designs</h2>

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
  </div>
</section>
</>
  );
};

export default Projects;
