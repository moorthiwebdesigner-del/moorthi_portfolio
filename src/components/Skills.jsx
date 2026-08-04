import FadeIn from "./FadeIn";

import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaShopify,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiVite,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          icon: <FaReact className="text-cyan-500" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400" />,
        },
        {
          name: "Vite",
          icon: <SiVite className="text-purple-500" />,
        },
      ],
    },

    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-700" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-500" />,
        },
      ],
    },

    {
      title: "CMS",
      skills: [
        {
          name: "WordPress",
          icon: <FaWordpress className="text-blue-600" />,
        },
        {
          name: "Shopify",
          icon: <FaShopify className="text-green-500" />,
        },
      ],
    },

    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-500" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-gray-900" />,
        },
        {
          name: "VS Code",
          icon: <VscVscode className="text-blue-500" />,
        },
        {
          name: "Figma",
          icon: <FaFigma className="text-pink-500" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-orange-500" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-50"
    >
      <div className="container mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="text-center mb-16">

            <p className="text-blue-600 uppercase tracking-widest font-semibold">
              MY SKILLS
            </p>

            <h2 className="text-5xl font-black mt-3 text-gray-900">
              Technologies I Work With
            </h2>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
              Modern technologies I use to build fast, scalable and
              responsive web applications.
            </p>

          </div>

        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">

          {categories.map((category, index) => (

            <FadeIn key={index}>

              <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full">

                <h3 className="text-2xl font-bold mb-8">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-5">

                  {category.skills.map((skill) => (

                    <div
                      key={skill.name}
                      className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 group"
                    >

                      <div className="text-3xl group-hover:scale-110 transition">
                        {skill.icon}
                      </div>

                      <span className="font-semibold">
                        {skill.name}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </FadeIn>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;