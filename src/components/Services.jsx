import React from "react";
import { Globe, Figma, PenTool } from "lucide-react"; // Icons from Lucide

const services = [
  {
    title: "Web Development",
    icon: <Globe className="w-14 h-14 text-brand-lightbg mb-4 hover:text-brand-accent" />,
    description:
      "I build fast and responsive websites using modern technologies like React, Next.js, and Tailwind CSS. Whether it's a landing page, portfolio, or a fully functional web app, I ensure clean code, smooth animations, and excellent user experience across all devices.",
  },
  {
    title: "UI/UX Design",
    icon: <Figma className="w-14 h-14 text-brand-lightbg mb-4 hover:text-brand-accent" />,
    description:
      "I design clean, intuitive interfaces that prioritize user experience and visual harmony. From wireframes to high-fidelity prototypes, I focus on user flows, accessibility, and consistency. Ensuring your product not only looks great but is also easy to use.",
  },
  {
    title: "Graphic Design",
    icon: <PenTool className="w-14 h-14 text-brand-lightbg mb-4 hover:text-brand-accent" />,
    description:
      "I craft visually appealing logos, marketing materials, and social media assets that reflect your brand identity. My designs are guided by principles of balance, typography, and color theory to create visuals that are both impactful and professional.",
  },
];


const Services = () => {
  return (
    <section
      id="services"
      className="bg-brand-darktop text-brand-lightbg py-24 px-72 md:px-20 lg:px-96 relative z-10"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
        <p className="text-lg text-brand-muted text-brand-lightbg/70">
          I help clients bring their ideas to life through modern design and development.
        </p>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  {services.map((service, index) => (
    <div
      key={index}
      className="bg-brand-dark rounded-2xl p-6 text-center shadow-md backdrop-blur-md transition hover:shadow-xl hover:-translate-y-2 duration-300"
    >
      <div className="flex justify-center mb-8 mt-8">
        {service.icon}
      </div>
      <h3 className="text-3xl font-semibold mb-4 text-brand-lightbg">{service.title}</h3>
      <p className="text-brand-lightbg text-md px-8 text-brand-lightbg/70 ">{service.description}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default Services;
