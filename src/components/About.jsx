import {
  FaReact,
  FaPhp,
  FaDatabase,
  FaWordpress,
  FaRobot,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";

import FadeIn from "./FadeIn";


function About() {

  return (

    <section
      id="about"
      className="
      py-20
      bg-white
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
              About Me
            </p>


            <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            mt-3
            "
            >
              My Journey & Expertise
            </h2>


          </div>


        </FadeIn>







        <div
        className="
        grid
        lg:grid-cols-2
        gap-14
        items-center
        ">


          {/* Image */}

          <FadeIn>

            <div
            className="
            flex
            justify-center
            "
            >

              <div
              className="
              relative
              "
              >


                <div
                className="
                absolute
                inset-0
                bg-blue-500
                blur-3xl
                opacity-20
                rounded-3xl
                "
                />


                <img
                src="/profile.png"
                alt="Moorthi"
                className="
                relative
                rounded-3xl
                shadow-2xl
                max-w-md
                "
                />


              </div>


            </div>


          </FadeIn>








          {/* Content */}

          <FadeIn>


            <h3
            className="
            text-3xl
            font-bold
            mb-5
            "
            >

              Hi, I'm Moorthi 👋

            </h3>





            <p
            className="
            text-gray-600
            leading-8
            "
            >

              My journey started with web design and
              gradually evolved into full stack
              development. I enjoy creating modern,
              responsive and user-friendly digital
              solutions.

            </p>





            <p
            className="
            text-gray-600
            leading-8
            mt-5
            "
            >

              I work on business websites, CRM systems,
              eCommerce platforms and custom web
              applications by combining clean UI,
              efficient backend solutions and modern
              technologies.

            </p>






            {/* Expertise */}

            <div
            className="
            mt-8
            space-y-4
            "
            >


              <Expertise text="Frontend Development (React.js)" />


              <Expertise text="Backend Development (PHP & API)" />


              <Expertise text="Database Solutions (MySQL)" />


              <Expertise text="CMS & AI Integration Solutions" />



            </div>







            {/* Technology Cards */}

            <div
            className="
            grid
            grid-cols-2
            gap-4
            mt-10
            "
            >


              <Skill
              icon={<FaReact/>}
              name="React.js"
              color="text-cyan-500"
              />


              <Skill
              icon={<FaPhp/>}
              name="PHP"
              color="text-purple-500"
              />


              <Skill
              icon={<FaDatabase/>}
              name="MySQL"
              color="text-yellow-500"
              />


              <Skill
              icon={<FaWordpress/>}
              name="WordPress"
              color="text-blue-500"
              />


              <Skill
              icon={<FaRobot/>}
              name="AI Integration"
              color="text-pink-500"
              />



            </div>








            {/* Resume Button */}

            <a
            href="/moorthi_resume.pdf"
            target="_blank"
            className="
            inline-flex
            items-center
            gap-3
            mt-10
            bg-blue-600
            text-white
            px-8
            py-4
            rounded-xl
            font-semibold
            hover:bg-blue-700
            transition
            "
            >

              <FaDownload/>

              Download Resume

            </a>



          </FadeIn>



        </div>


      </div>


    </section>

  );

}





function Expertise({text}){

  return(

    <div
    className="
    flex
    items-center
    gap-3
    text-gray-700
    "
    >

      <FaCheckCircle
      className="
      text-blue-600
      "
      />

      {text}

    </div>

  );

}





function Skill({icon,name,color}){

  return(

    <div
    className="
    flex
    items-center
    gap-3
    bg-slate-50
    p-4
    rounded-xl
    font-semibold
    "
    >

      <span
      className={`${color} text-xl`}
      >
        {icon}
      </span>

      {name}

    </div>

  );

}


export default About;