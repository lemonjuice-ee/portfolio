import React, { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    image: "/portfoliomock.png",
    description:
      "A personal portfolio built with React and Tailwind CSS to showcase my design and development work.",
    link: "#",
    tags: ["React", "Tailwind CSS", "Portfolio"],
  },
  {
    title: "Enrollment Management System",
    image: "/mtcmock.png",
    description:
      "A responsive web app designed for a TESDA accredited Training and Assessment Center to streamline trainee registration and course enrollment. Features include student sign-up, course selection and status, and admin controls, all managed through an intuitive dashboard. Built with NextJS, Strapi CMS and Tailwind CSS.",
    link: "https://mtc-ph.vercel.app",
    logo: "/mtclogo.png",
    tags: ["Next", "Tailwind CSS", "Strapi"],
  },
  {
    title: "E-Commerce Web App",
    image: "/rscmock.png",
    description:
      "A fully responsive e-commerce web app built for a product distribution business that allows users to browse products, add items to a cart, and securely check out. Built with Next.js, Tailwind CSS, and PostgreSQL.",
    link: "https://rsc-online.vercel.app",
    logo: "/rsclogo.png",
    tags: ["Next", "Tailwind CSS", "PostgreSQL"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-smooth bg-brand-darktop text-brand-lightbg py-24 px-72 md:px-20 lg:px-96 relative z-10"
    >
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
      </div>

      <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-1">
        {projects.map((project, index) => (
          <Fragment key={index}>
            <div className="rounded-xl overflow-hidden shadow-lg backdrop-blur-md min-h-[300px] flex flex-col md:flex-row">
              {/* IMAGE */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 flex justify-center items-center md:w-1/2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-[100%] h-auto rounded-xl shadow-md"
                />
              </a>

              {/* TEXT + LOGO */}
              <div className="p-6 pt-4 md:pt-8 flex flex-col justify-start md:w-1/2 ml-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-semibold mb-4 text-brand-lightbg">
                      {project.title}
                    </h3>
                    <p className="text-md text-brand-lightbg/80 mb-6">
                      {project.description}
                    </p>
                  </div>
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={`${project.title} Logo`}
                      className="w-20 h-20 object-contain ml-4 bg-white rounded-full px-2"
                    />
                  )}
                </div>

                {/* VISIT WEBSITE */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-base mb-6"
                >
                  VISIT WEBSITE <ArrowUpRight strokeWidth={3} />
                </a>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {project.tags &&
                    project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/10 text-sm text-brand-lightbg px-3 py-2 rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            {index !== projects.length - 1 && (
              <div className="border-t border-white/50 w-full" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
