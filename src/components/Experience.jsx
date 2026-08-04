import FadeIn from "./FadeIn";

function Experience() {
  const timeline = [
    {
      year: "2010",
      title: "Web Designer",
      company: "Racy Web Solutions",
      description:
        "Started my professional career designing responsive websites, landing pages and UI layouts.",
    },

    {
      year: "2011 - 2014",
      title: "Senior Designer",
      company: "MBW Techimpex Pvt Ltd",
      description:
        "Worked on web design, branding, UI development and business website projects.",
    },

    {
      year: "2014 - 2020",
      title: "Senior Web Designer",
      company: "Best Rankers Internet Technologies Pvt Ltd",
      description:
        "Delivered 100+ business websites, responsive layouts, WordPress themes, landing pages and branding solutions.",
    },

    {
      year: "2021 - 2024",
      title: "Senior Web Developer",
      company: "Hubra Digital LLP",
      description:
        "Built WordPress websites, Shopify stores, PHP applications, API integrations and SEO optimized business websites.",
    },

    {
      year: "2024 - Present",
      title: "Senior Full Stack Developer",
      company: "Freelancer",
      description:
        "Developing React, Node.js, WordPress, Shopify, AI powered web applications and custom business solutions.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-white"
    >
      <div className="container mx-auto max-w-5xl px-6">

        <FadeIn>

          <div className="text-center mb-20">

            <p className="uppercase tracking-widest text-blue-600 font-semibold">
              Experience
            </p>

            <h2 className="text-5xl font-black mt-3">
              My Professional Journey
            </h2>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
              More than a decade of experience building websites,
              eCommerce platforms and modern web applications.
            </p>

          </div>

        </FadeIn>

        <div className="relative">

          {/* Timeline Line */}

          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-blue-100 md:-translate-x-1/2"></div>

          {timeline.map((item, index) => (

            <FadeIn key={index}>

              <div
                className={`relative mb-16 flex ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } items-center`}
              >

                {/* Card */}

                <div className="w-full md:w-1/2 pl-16 md:pl-0">

                  <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                    <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">

                      {item.year}

                    </span>

                    <h3 className="text-2xl font-bold mt-5">

                      {item.title}

                    </h3>

                    <h4 className="text-blue-600 font-semibold mt-2">

                      {item.company}

                    </h4>

                    <p className="text-gray-600 leading-8 mt-5">

                      {item.description}

                    </p>

                  </div>

                </div>

                {/* Circle */}

                <div className="absolute left-5 md:left-1/2 -translate-x-1/2">

                  <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center">

                    <div className="w-3 h-3 rounded-full bg-white"></div>

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

export default Experience;