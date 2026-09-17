import FadeIn from "./FadeIn";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import mr from "../assets/projects/1.png";
import mi from "../assets/projects/2.png";
import smc from "../assets/projects/3.png";
import el from "../assets/projects/4.png";
import sh from "../assets/projects/5.png";
import ai from "../assets/projects/6.png";

function Projects() {

const projects = [
{
  title: "MR.1989 | Premium Leather",
  image: mr,
  description:
    "A premium e-commerce platform created for MR.1989, showcasing leather products through a refined digital experience with seamless navigation, responsive design, and a strong brand presence.",
  tech: ["WooCommerce", "WordPress", "PHP", "MySQL", "Payment Gateway"],
  demo: "https://mr1989.in/"
},

{
  title: "Mirra Clothing | Premium Women's Fashion",
  image: mi,
  description:
    "A stylish e-commerce experience designed for Mirra Clothing, combining elegant visual presentation, intuitive navigation, responsive design, and a seamless shopping experience.",
  tech: ["WooCommerce", "WordPress", "PHP", "MySQL", "Payment Gateway"],
  demo: "https://www.mirraclothing.com/"
},

{
  title: "School Management CRM",
  image: smc,
  description:
    "A smart school management CRM designed to simplify administration, streamline daily operations, and provide an intuitive digital experience for educational institutions.",
  tech: ["React Native", "Expo"],
  demo: "#"
},

{
  title: "Everything Law Professional Corporation",
  image: el,
  description:
    "A professional legal website designed to present legal services with clarity and credibility, delivering an intuitive and responsive experience across desktop and mobile devices.",
  tech: ["PHP", "HTML", "CSS"],
  demo: "https://everythinglaw.ca/"
},

{
  title: "Shree Color Coats",
  image: sh,
  description:
    "A modern corporate website designed for Shree Color Coats, presenting its powder coating solutions, services, manufacturing capabilities, and business information through a clean and professional digital experience.",
  tech: ["HTML", "Bootstrap", "CSS"],
  demo: "https://www.shreecolorcoats.com/"
},

{
  title: "LUXOR SHIELD",
  image: ai,
  description:
    "A premium corporate website designed for LUXOR SHIELD, showcasing its advanced powder coating solutions, premium finishes, manufacturing expertise, and surface protection capabilities through a modern and responsive digital experience.",
  tech: ["HTML", "Bootstrap", "CSS"],
  demo: "https://luxorshield.com/"
}
];




return (

<section
id="projects"
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
font-semibold
tracking-widest
"
>
Portfolio
</p>


<h2
className="
text-4xl
md:text-5xl
font-black
mt-3
"
>
Featured Projects
</h2>



<p
className="
text-gray-500
mt-5
max-w-2xl
mx-auto
"
>
Real-world applications and websites built
with modern technologies and clean UI.
</p>


</div>


</FadeIn>







<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"
>


{
projects.map((project,index)=>(


<FadeIn key={index}>


<div
className="
group
bg-white
rounded-3xl
overflow-hidden
border
border-gray-100
shadow-md
hover:shadow-2xl
transition
h-full
flex
flex-col
"
>


{/* Image */}


<div
className="
overflow-hidden
"
>


<img

src={project.image}

alt={project.title}

className="
w-full
h-75
object-cover
group-hover:scale-110
transition
duration-500
"

/>


</div>





{/* Content */}


<div
className="
p-7
flex
flex-col
flex-1
"
>


<h3
className="
text-xl
font-bold
"
>

{project.title}

</h3>



<p
className="
text-gray-600
mt-4
leading-7
flex-1
"
>

{project.description}

</p>





{/* Tech */}


<div
className="
flex
flex-wrap
gap-2
mt-6
"
>


{
project.tech.map(item=>(

<span

key={item}

className="
bg-blue-100
text-blue-600
px-3
py-1
rounded-full
text-sm
font-medium
"
>

{item}

</span>


))
}


</div>







{/* Buttons */}


<div
className="
flex
gap-3
mt-7
"
>


<a

href={project.demo}

target="_blank"

className="
flex-1
bg-blue-600
text-white
py-3
rounded-xl
flex
items-center
justify-center
gap-2
hover:bg-blue-700
transition
"

>

<FaExternalLinkAlt/>

Live

</a>









</div>



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


export default Projects;