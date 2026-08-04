import {
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
  FaSearch,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

import FadeIn from "./FadeIn";

function WhyChooseMe() {
  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Modern Development",
      desc: "React, Node.js, WordPress & Shopify solutions using latest technologies.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Perfect experience across Desktop, Tablet and Mobile devices.",
    },
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      desc: "Optimized websites with fast loading speed and smooth user experience.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Friendly",
      desc: "Search engine optimized websites to improve online visibility.",
    },
    {
      icon: <FaHeadset />,
      title: "After Support",
      desc: "Reliable maintenance and technical support whenever required.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Delivery",
      desc: "Clean code, scalable architecture and on-time project delivery.",
    },
  ];

  return (
    <section
      id="why"
      className="py-24 bg-slate-50"
    >
      <div className="container">

        <FadeIn>

          <div className="text-center mb-16">

            <p className="text-blue-600 uppercase tracking-widest font-semibold">
              Why Choose Me
            </p>

            <h2 className="text-5xl font-black mt-3">
              Building Digital Experiences
            </h2>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
              I create premium, responsive and business-focused websites that
              help brands grow online.
            </p>

          </div>

        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <FadeIn key={index}>

              <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-8 h-full border border-gray-100 hover:-translate-y-2">

                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-3xl mb-6">

                  {item.icon}

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-600 leading-8">

                  {item.desc}

                </p>

              </div>

            </FadeIn>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseMe;