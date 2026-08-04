import FadeIn from "./FadeIn";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Lead Generation CRM",
      image: "/projects/crm.png",
      description:
        "A complete Lead Management CRM with Google Places API, Follow-ups, Dashboard, Analytics and Export features.",
      tech: ["React", "Node.js", "PostgreSQL", "Google API"],
      github: "https://github.com/moorthiwebdesigner-del/lead_generation_tool",
      demo: "https://lead-generation-tool-ten.vercel.app/",
    },

    {
      title: "Portfolio Website",
      image: "/projects/portfolio.png",
      description:
        "Modern personal portfolio built with React, Tailwind CSS and premium responsive UI.",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/moorthiwebdesigner-del/moorthi_portfolio",
      demo: "https://moorthi-portfolio.vercel.app/",
    },

    {
      title: "E-Commerce Website",
      image: "/projects/ecommerce.png",
      description:
        "Responsive online shopping website with product catalog, cart and checkout UI.",
      tech: ["Shopify", "Liquid", "CSS"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-white"
    >
      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}

        <FadeIn>

          <div className="text-center mb-16">

            <p className="text-blue-600 uppercase font-semibold tracking-widest">
              Portfolio
            </p>

            <h2 className="text-5xl font-black mt-3">
              Featured Projects
            </h2>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
              A collection of modern web applications and websites
              built using the latest technologies.
            </p>

          </div>

        </FadeIn>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-3">

          {projects.map((project, index) => (

            <FadeIn key={index}>

              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 h-full flex flex-col">

                {/* Image */}

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                  />

                </div>

                {/* Content */}

                <div className="p-8 flex flex-col flex-1">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mt-5 leading-7 flex-1">
                    {project.description}
                  </p>

                  {/* Tech */}

                  <div className="flex flex-wrap gap-2 mt-6">

                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-4 mt-8">

                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex-1 bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition"
                    >
                      <FaExternalLinkAlt />

                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      className="flex-1 border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition"
                    >
                      <FaGithub />

                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            </FadeIn>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;