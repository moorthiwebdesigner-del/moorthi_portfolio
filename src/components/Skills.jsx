import FadeIn from "./FadeIn";

import {
  FaReact,
  FaPhp,
  FaDatabase,
  FaWordpress,
  FaShopify,
  FaGitAlt,
  FaGithub,
  FaRobot,
  FaFigma,
  FaShoppingCart,
    FaPalette,
  FaPaintBrush
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";



function Skills() {


const categories = [


  {
    title: "Frontend Development",

    skills: [

      {
        name: "React.js",
        icon: <FaReact className="text-cyan-500"/>
      },

      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400"/>
      },

      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400"/>
      },

      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-purple-500"/>
      },

    ]
  },




  {
    title: "Backend & Database",

    skills: [

      {
        name:"PHP",
        icon:<FaPhp className="text-purple-600"/>
      },


      {
        name:"MySQL",
        icon:<SiMysql className="text-blue-500"/>
      },


      {
        name:"REST API",
        icon:<FaDatabase className="text-green-500"/>
      },


      {
        name:"Node.js",
        icon:<SiNodedotjs className="text-green-600"/>
      },


    ]
  },





  {
    title:"CMS & Ecommerce",

    skills:[


      {
        name:"WordPress",
        icon:<FaWordpress className="text-blue-600"/>
      },


      {
        name:"Shopify",
        icon:<FaShopify className="text-green-500"/>
      },


      {
        name:"WooCommerce",
        icon:<FaShoppingCart className="text-orange-500"/>
      },


      {
        name:"SEO",
        icon:<FaDatabase className="text-red-500"/>
      },


    ]
  },







  {
    title:"Design & Tools",

    skills:[


      {
        name:"Figma",
        icon:<FaFigma className="text-pink-500"/>
      },


      {
        name:"Canva",
        icon:<FaPalette className="text-blue-500"/>
      },


      {
        name:"Photoshop",
        icon:<FaPaintBrush  className="text-blue-600"/>
      },


      {
        name:"Illustrator",
        icon:<FaPaintBrush className="text-orange-500"/>
      },


      {
        name:"Git",
        icon:<FaGitAlt className="text-orange-500"/>
      },


      {
        name:"GitHub",
        icon:<FaGithub className="text-gray-800"/>
      },


      {
        name:"VS Code",
        icon:<VscVscode className="text-blue-500"/>
      },


      {
        name:"AI Integration",
        icon:<FaRobot className="text-pink-500"/>
      },


    ]

  }



];







return (

<section
id="skills"
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
"
>





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
uppercase
tracking-widest
font-semibold
"
>
My Skills
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

Technologies & Tools

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

Technologies, frameworks and design tools
I use to build modern websites,
applications and digital solutions.

</p>



</div>

</FadeIn>







<div
className="
grid
md:grid-cols-2
gap-8
"
>


{
categories.map((category,index)=>(


<FadeIn key={index}>


<div
className="
bg-white
rounded-3xl
p-8
shadow-md
hover:shadow-xl
transition-all
duration-300
h-full
"
>


<h3
className="
text-2xl
font-bold
mb-8
"
>

{category.title}

</h3>





<div
className="
grid
grid-cols-2
gap-4
"
>


{
category.skills.map((skill)=>(


<div

key={skill.name}

className="
flex
items-center
gap-3
border
border-gray-100
rounded-2xl
p-4
hover:bg-blue-600
hover:text-white
transition-all
duration-300
group
"

>


<div
className="
text-3xl
group-hover:scale-110
transition
"
>

{skill.icon}

</div>



<span
className="
font-semibold
text-sm
"
>

{skill.name}

</span>



</div>


))
}



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


export default Skills;