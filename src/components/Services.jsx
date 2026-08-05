import FadeIn from "./FadeIn";

import {
  FaLaptopCode,
  FaDatabase,
  FaShoppingCart,
  FaPaintBrush,
} from "react-icons/fa";


function Services() {


  const services = [

    {
      icon: <FaLaptopCode size={42}/>,
      title: "Full Stack Development",
      desc:
      "Building modern, scalable and responsive web applications using React, PHP and MySQL technologies."
    },


    {
      icon: <FaDatabase size={42}/>,
      title: "CRM & Business Solutions",
      desc:
      "Custom CRM systems, dashboards and business applications designed to improve workflow and productivity."
    },


    {
      icon: <FaShoppingCart size={42}/>,
      title: "eCommerce Solutions",
      desc:
      "Professional online stores using Shopify, WooCommerce and custom solutions to grow your business."
    },


    {
      icon: <FaPaintBrush size={42}/>,
      title: "UI/UX & Web Design",
      desc:
      "Clean, modern and user-friendly interface designs focused on better customer experience."
    },


  ];



  return (

    <section
    id="services"
    className="
    py-20
    bg-slate-50
    "
    >

      <div
      className="
      container
      mx-auto
      max-w-7xl
      px-6
      ">



        {/* Heading */}


        <FadeIn>

          <div
          className="
          text-center
          mb-14
          "
          >

            <p
            className="
            text-blue-600
            font-semibold
            uppercase
            tracking-widest
            "
            >
              My Services
            </p>


            <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            mt-3
            text-gray-900
            "
            >
              Solutions I Provide
            </h2>


            <p
            className="
            text-gray-500
            mt-5
            max-w-2xl
            mx-auto
            leading-8
            "
            >

              I help businesses build modern digital
              solutions with powerful technology,
              clean design and scalable development.

            </p>


          </div>


        </FadeIn>







        {/* Cards */}


        <div
        className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-7
        "
        >


          {
            services.map((service,index)=>(


              <FadeIn key={index}>


                <div
                className="
                group
h-full
flex
flex-col
bg-white
rounded-3xl
p-7
border
border-gray-100
shadow-md
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
                "
                >



                  {/* Icon */}


                  <div
                  className="
                  w-18
                  h-18
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





                  <h3
                  className="
                  text-xl
                  font-bold
                  mt-7
                  text-gray-900
                  "
                  >

                    {service.title}

                  </h3>





                  <p
                  className="
                  text-gray-600
leading-7
mt-4
flex-1
                  "
                  >

                    {service.desc}

                  </p>




                  <div
                  className="
                  mt-6
                  text-blue-600
                  font-semibold
                  group-hover:translate-x-2
                  transition
                  "
                  >

                    Explore →

                  </div>




                </div>


              </FadeIn>


            ))
          }


        </div>


      </div>


    </section>

  );

}


export default Services;