import React from "react";
import { GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Profile = () => {
  return (
    <section
      id="profile"
      className="relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#0f0f0f] text-brand-lightbg py-24 px-6 sm:px-10 md:px-20 lg:px-72 xl:px-96 z-10"
    >
      {/* Animated Background Circles */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 animate-pulse-slow blur-3xl z-0"></div>
      <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] rounded-full bg-brand-lightbg/10 animate-pulse-slower blur-2xl z-0"></div>

      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        The Developer
      </motion.h2>

      {/* Centered Image + Info */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        {/* Profile Image */}
        <motion.div
          className="rounded-full overflow-hidden border-4 border-white/20 shadow-lg w-40 sm:w-48 md:w-56 lg:w-60 aspect-square"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/profilepic.png"
            alt="Profile"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Info */}
        <motion.div
          className="max-w-xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Hi, I'm Fritz Adrian Yu
          </h1>
          <p className="text-base sm:text-lg text-brand-lightbg/70 mb-4">
            A passionate front-end developer and designer with a focus on clean,
            responsive interfaces and user-friendly experiences. I enjoy turning
            ideas into real-world solutions through code, with attention to
            design, performance, and accessibility.
          </p>
          <p className="flex flex-col sm:flex-row justify-center md:justify-start items-center text-sm sm:text-md text-brand-lightbg/70 mb-2 gap-2">
            <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-brand-lightbg" />
            <span>
              <span className="text-brand-lightbg font-medium">
                STI College Fairview
              </span>{" "}
              – Bachelor of Science in Information Technology
            </span>
          </p>
          <p className="flex items-center justify-center md:justify-start text-sm sm:text-md text-brand-lightbg mb-6 gap-2">
            <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-brand-lightbg" />
            Quezon City, Philippines
          </p>
          <a
            href="/Yu Resume 2025.pdf"
            download
            className="bg-white/10 text-sm text-brand-lightbg px-3 py-2 rounded-md border border-white/20 transition-shadow hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Tools Section */}
      <motion.div
        className="mt-16 text-center max-w-5xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        <h3 className="text-2xl font-semibold mb-12">Tools</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left px-4 sm:px-10 md:px-0">
          {/* Development Tools */}
          <div>
            <h4 className="text-xl font-bold mb-4">Development</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "logo192.png", name: "React" },
                { src: "/nextlogo.webp", name: "Next.js" },
                { src: "/tailwindlogo.png", name: "Tailwind CSS", height: "h-6" },
                { src: "/jslogo.png", name: "JavaScript" },
                { src: "/htmllogo.png", name: "HTML" },
                { src: "/csslogo.png", name: "CSS" },
                { src: "/strapilogo.png", name: "Strapi" },
              ].map(({ src, name, height }) => (
                <div key={name} className="flex items-center gap-2">
                  <img
                    src={src}
                    alt={name}
                    loading="lazy"
                    className={`${height || "h-10"} w-auto`}
                  />
                  <span className="text-base">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Design Tools */}
          <div>
            <h4 className="text-xl font-bold mb-4">Design</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/figmalogo.png", name: "Figma" },
                { src: "/canvalogo.png", name: "Canva" },
                { src: "/ailogo.png", name: "Illustrator" },
              ].map(({ src, name }) => (
                <div key={name} className="flex items-center gap-2">
                  <img src={src} alt={name} className="h-10 w-auto" />
                  <span className="text-base">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
