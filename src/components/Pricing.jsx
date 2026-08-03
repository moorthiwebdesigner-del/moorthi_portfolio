const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    features: [
      "1-5 Pages Website",
      "Responsive Design",
      "Contact Form",
      "Basic SEO",
      "Free Support (7 Days)",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "₹9,999",
    features: [
      "Up to 10 Pages",
      "Premium Design",
      "WhatsApp Integration",
      "Advanced SEO",
      "30 Days Support",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "Custom",
    features: [
      "Unlimited Pages",
      "Custom Web Application",
      "WooCommerce / Shopify",
      "Admin Dashboard",
      "90 Days Support",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Pricing
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Affordable Packages
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Choose the perfect package for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-10 shadow-xl transition duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-white"
              }`}
            >
              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <h2 className="text-5xl font-black mt-5">
                {plan.price}
              </h2>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full py-4 rounded-xl font-semibold transition ${
                  plan.featured
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