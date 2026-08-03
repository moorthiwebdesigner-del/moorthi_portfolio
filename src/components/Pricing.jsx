import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    title: "Starter",
    price: "₹4,999",
    features: [
      "1-5 Pages Website",
      "Responsive Design",
      "Contact Form",
      "Basic SEO",
      "7 Days Support",
    ],
    popular: false,
  },
  {
    title: "Business",
    price: "₹9,999",
    features: [
      "Up to 10 Pages",
      "Premium Design",
      "WhatsApp Integration",
      "Advanced SEO",
      "30 Days Support",
    ],
    popular: true,
  },
  {
    title: "Premium",
    price: "Custom",
    features: [
      "Unlimited Pages",
      "Custom Web Application",
      "WooCommerce / Shopify",
      "Admin Dashboard",
      "90 Days Support",
    ],
    popular: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="section bg-slate-50">

      <div className="container">

        <div className="text-center mb-16">

          <span className="section-tag">
            Pricing
          </span>

          <h2 className="section-title">
            Affordable Website Packages
          </h2>

          <p className="section-desc mx-auto">
            Choose a package that fits your business. Need something different?
            Contact me for a custom quote.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`relative rounded-3xl p-8 shadow-lg transition duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-white"
              }`}
            >

              {plan.popular && (
                <span className="absolute top-5 right-5 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-3xl font-bold">
                {plan.title}
              </h3>

              <h2 className="text-5xl font-black mt-4">
                {plan.price}
              </h2>

              <div className="mt-8 space-y-4">

                {plan.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle
                      className={
                        plan.popular
                          ? "text-green-300"
                          : "text-green-500"
                      }
                    />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              <button
                className={`w-full mt-10 py-4 rounded-xl font-bold transition ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;