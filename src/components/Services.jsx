import FadeIn from "./FadeIn";

import {
  FaLaptopCode,
  FaReact,
  FaWordpress,
  FaShopify,
  FaPaintBrush,
  FaSearch,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={42} />,
      title: "Website Development",
      desc: "Modern, responsive and high-performance business websites built with the latest technologies.",
    },
    {
      icon: <FaReact size={42} />,
      title: "React Development",
      desc: "Fast, scalable and SEO-friendly React applications with beautiful responsive UI.",
    },
    {
      icon: <FaWordpress size={42} />,
      title: "WordPress Development",
      desc: "Professional WordPress websites with custom themes, plugins and business solutions.",
    },
    {
      icon: <FaShopify size={42} />,
      title: "Shopify Store",
      desc: "Premium Shopify eCommerce stores designed to increase online sales and conversions.",
    },
    {
      icon: <FaPaintBrush size={42} />,
      title: "UI / UX Design",
      desc: "Clean, modern and user-friendly interface designs focused on better user experience.",
    },
    {
      icon: <FaSearch size={42} />,
      title: "SEO Optimization",
      desc: "Optimize your website for Google ranking, speed, performance and better visibility.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-slate-50"
    >
      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}

        <FadeIn>

          <div className="text-center mb-16">

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              My Services
            </p>

            <h2 className="text-5xl font-black mt-3 text-gray-900">
              What I Can Do For You
            </h2>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
              I build modern websites and web applications that help
              businesses grow faster using the latest technologies.
            </p>

          </div>

        </FadeIn>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (

            <FadeIn key={index}>

              <div
                className="
                group
                h-full
                flex
                flex-col
                bg-white
                rounded-3xl
                p-8
                border
                border-gray-100
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-300
              "
              >

                {/* Icon */}

                <div
                  className="
                  w-20
                  h-20
                  rounded-2xl
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-blue-600
                  group-hover:text-white
                  transition
                "
                >
                  {service.icon}
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold mt-8 text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="text-gray-600 leading-8 mt-5 flex-1">
                  {service.desc}
                </p>

                {/* Button */}

                <button
                  className="
                  mt-auto
                  pt-8
                  text-blue-600
                  font-semibold
                  group-hover:translate-x-2
                  transition
                "
                >
                  Learn More →
                </button>

              </div>

            </FadeIn>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;