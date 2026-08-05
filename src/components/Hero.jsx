import {
  FaArrowRight,
  FaReact,
  FaPhp,
  FaDatabase,
  FaWordpress,
  FaShopify,
  FaRobot,
} from "react-icons/fa";

import FadeIn from "./FadeIn";




function Hero() {

  return (

    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      bg-gradient-to-br
      from-slate-900
      via-blue-950
      to-slate-900
      overflow-hidden
      pt-28
      md:pt-12
      pb-8
      "
    >


      <div
      className="
      container
      mx-auto
      px-5
      md:px-6
      grid
      lg:grid-cols-2
      gap-12
      items-center
      "
      >


        {/* LEFT CONTENT */}

        <FadeIn>

          <span
          className="
          inline-flex
          items-center
          bg-blue-600/20
          border
          border-blue-500/40
          text-blue-300
          px-4
          py-2
          rounded-full
          font-semibold
          text-xs
          md:text-sm
          "
          >
            🚀 Available for Opportunities
          </span>




          <h1
          className="
          mt-5
          text-4xl
          md:text-6xl
          lg:text-7xl
          font-black
          leading-tight
          text-white
          "
          >

            Hello, I'm

            <br/>

            <span className="text-blue-400">
              Moorthi A
            </span>

          </h1>




          <h2
          className="
          mt-5
          text-xl
          md:text-3xl
          font-bold
          text-gray-300
          "
          >

            Senior Full Stack Developer

            <br/>

            <span className="text-blue-400">
              AI & Web Solutions Engineer
            </span>

          </h2>




          <p
          className="
          mt-4
          max-w-xl
          text-base
          md:text-lg
          leading-8
          text-gray-400
          "
          >

            I build scalable websites, CRM systems,
            eCommerce platforms and modern web
            applications using React, PHP, MySQL
            and AI-powered solutions.

          </p>





          {/* BUTTONS */}

          <div
          className="
          flex
          flex-row
          gap-3
          mt-7
          "
          >


            <a
            href="#projects"
            className="
            bg-blue-600
            hover:bg-blue-700
            px-5
            py-3
            md:px-8
            md:py-4
            rounded-xl
            text-white
            font-semibold
            flex
            items-center
            gap-2
            shadow-lg
            transition
            text-sm
            md:text-base
            "
            >

              View Projects

              <FaArrowRight/>

            </a>





            <a
href="/moorthi_resume.pdf"
target="_blank"
rel="noopener noreferrer"
className="
border
border-gray-500
text-white
px-8
py-4
rounded-xl
hover:bg-white
hover:text-black
transition
inline-flex
items-center
justify-center
"
>
Download Resume
</a>


          </div>






          {/* TECHNOLOGY */}

          <div
          className="
          flex
          flex-wrap
          gap-3
          mt-10
          "
          >


            <Tech
            icon={<FaReact/>}
            name="React"
            color="text-cyan-400"
            />


            <Tech
            icon={<FaPhp/>}
            name="PHP"
            color="text-purple-400"
            />


            <Tech
            icon={<FaDatabase/>}
            name="MySQL"
            color="text-yellow-400"
            />


            <Tech
            icon={<FaWordpress/>}
            name="WordPress"
            color="text-blue-400"
            />


            <Tech
            icon={<FaShopify/>}
            name="Shopify"
            color="text-green-400"
            />


            <Tech
            icon={<FaRobot/>}
            name="AI"
            color="text-pink-400"
            />



          </div>


        </FadeIn>






        {/* RIGHT IMAGE */}


       {/* RIGHT IMAGE */}

<FadeIn>

  <div
  className="
  flex
  flex-col
  justify-center
  items-center
  "
  >


    <div className="relative">


      {/* Glow */}

      <div
      className="
      absolute
      inset-0
      bg-blue-500
      blur-[100px]
      opacity-30
      rounded-full
      "
      />


      {/* Image */}

      <div
      className="
      relative
      w-64
      h-64
      md:w-80
      md:h-80
      lg:w-[390px]
      lg:h-[390px]
      rounded-full
      border-[6px]
      border-blue-500
      overflow-hidden
      shadow-[0_0_60px_rgba(37,99,235,0.5)]
      "
      >

        <img
        src="/hero.png"
        alt="Moorthi"
        className="
        w-full
        h-full
        object-cover
        object-top
        "
        />

      </div>


    </div>




    {/* Stats Card */}

    <div
    className="
    mt-8
    w-full
    max-w-lg
    bg-white/10
    backdrop-blur-xl
    border
    border-white/10
    rounded-3xl
    overflow-hidden
    "
    >

      <div
      className="
      grid
      grid-cols-4
      "
      >


        <Stat
        number="100+"
        text="Projects"
        />


        <Stat
        number="15+"
        text="Years"
        />


        <Stat
        number="10+"
        text="Tech"
        />


        <Stat
        number="AI"
        text="Solutions"
        />


      </div>


    </div>



  </div>


</FadeIn>



      </div>


    </section>

  );

}



function Stat({number,text}){

  return (

    <div
    className="
    py-5
    text-center
    border-r
    border-white/10
    last:border-r-0
    "
    >

      <h3
      className="
      text-lg
      md:text-2xl
      font-bold
      text-blue-400
      "
      >

        {number}

      </h3>


      <p
      className="
      text-gray-300
      text-[11px]
      md:text-xs
      "
      >

        {text}

      </p>


    </div>

  );

}

function Tech({icon,name,color}){


  return (

    <div
    className="
    flex
    items-center
    gap-2
    bg-white/10
    backdrop-blur-xl
    px-3
    py-2
    rounded-xl
    text-white
    text-sm
    "
    >

      <span className={`${color} text-lg`}>
        {icon}
      </span>

      {name}

    </div>

  );

}



export default Hero;