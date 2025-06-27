import React from "react";
import { Globe, Figma, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    icon: (
      <Globe className="w-14 h-14 text-brand-lightbg mb-4 hover:text-brand-accent" />
    ),
    description:
      "I build fast and responsive websites using modern technologies like React, Next.js, and Tailwind CSS. Whether it's a landing page, portfolio, or a fully functional web app, I ensure clean code, smooth animations, and excellent user experience across all devices.",
  },
  {
    title: "UI/UX Design",
    icon: (
      <Figma className="w-14 h-14 text-brand-lightbg mb-4 hover:text-brand-accent" />
    ),
    description:
      "I design clean, intuitive interfaces that prioritize user experience and visual harmony. From wireframes to high-fidelity prototypes, I focus on user flows, accessibility, and consistency. Ensuring your product not only looks great but is also easy to use.",
  },
  {
    title: "Graphic Design",
    icon: (
      <PenTool className="w-14 h-14 text-brand-lightbg mb-4 hover:text-brand-accent" />
    ),
    description:
      "I craft visually appealing logos, marketing materials, and social media assets that reflect your brand identity. My designs are guided by principles of balance, typography, and color theory to create visuals that are both impactful and professional.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section
      id="services"
      className="bg-brand-darktop text-brand-lightbg py-24 px-6 sm:px-10 md:px-20 lg:px-96 relative z-10"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
        <p className="text-base md:text-md text-brand-lightbg/70 max-w-2xl mx-auto">
          I help clients bring their ideas to life through modern design and development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
  key={index}
  className="bg-brand-dark rounded-2xl p-6 text-center shadow-md backdrop-blur-md"
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  custom={index}
  whileHover={{ scale: 1.03 }} // <-- Slight zoom on hover
  transition={{ type: "spring", stiffness: 300, damping: 20 }} // smooth transition
>

            <div className="flex justify-center mb-6 lg:mt-5">{service.icon}</div>
            <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
            <p className="text-sm md:text-base text-brand-lightbg/70 px-2 md:px-6 lg:mb-5">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
