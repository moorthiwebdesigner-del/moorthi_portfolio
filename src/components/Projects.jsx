import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
    title: "Salon Website",
    category: "Business Website",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Salon+Website",
  },
  {
    title: "Restaurant Website",
    category: "React Website",
    image: "https://placehold.co/600x400/f97316/ffffff?text=Restaurant",
  },
  {
    title: "Gym Landing Page",
    category: "Fitness",
    image: "https://placehold.co/600x400/22c55e/ffffff?text=Gym",
  },
  {
    title: "Travel Agency",
    category: "Travel",
    image: "https://placehold.co/600x400/06b6d4/ffffff?text=Travel",
  },
  {
    title: "Medical Clinic",
    category: "Healthcare",
    image: "https://placehold.co/600x400/9333ea/ffffff?text=Medical",
  },
  {
    title: "E-Commerce Store",
    category: "WooCommerce",
    image: "https://placehold.co/600x400/e11d48/ffffff?text=E-Commerce",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="section bg-white"
    >
      <div className="container">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="section-tag">
            Portfolio
          </span>

          <h2 className="section-title">
            Recent Projects
          </h2>

          <p className="section-desc mx-auto">
            Here are some sample websites that demonstrate my design,
            development and responsive web skills.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-semibold">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-5">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-4">
                  Modern responsive website with clean UI,
                  fast loading speed and SEO optimization.
                </p>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">

                  <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition">

                    <FaExternalLinkAlt />

                    Live Demo

                  </button>

                  <button className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-3 rounded-xl hover:bg-blue-50 transition">

                    <FaGithub />

                    GitHub

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;