const projects = [
  {
    title: "Salon Website",
    category: "Business Website",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Restaurant Website",
    category: "React Website",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Gym Landing Page",
    category: "Fitness",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Travel Agency",
    category: "Booking Website",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Medical Clinic",
    category: "Healthcare",
    image: "https://placehold.co/600x400",
  },
  {
    title: "E-Commerce Store",
    category: "WooCommerce",
    image: "https://placehold.co/600x400",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Recent Projects
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Sample projects that showcase modern UI, responsive layouts,
            and business-focused web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <span className="text-blue-600 text-sm font-semibold">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  Responsive design with clean UI and optimized performance.
                </p>

                <div className="flex gap-3 mt-6">

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                    Live Demo
                  </button>

                  <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-lg">
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