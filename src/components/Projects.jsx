import FadeIn from "./FadeIn";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";


function Projects() {

const projects = [
{
 title:"Lead Management CRM",
 image:"/projects/crm.png",
 description:"CRM system with lead tracking, dashboard and analytics.",
 tech:["React","PHP","MySQL"]
},

{
 title:"Portfolio Website",
 image:"/projects/portfolio.png",
 description:"Modern developer portfolio with responsive UI.",
 tech:["React","Tailwind","Vite"]
},

{
 title:"E-Commerce Solution",
 image:"/projects/ecommerce.png",
 description:"Online shopping platform with product management.",
 tech:["Shopify","WooCommerce"]
},

{
 title:"School Management Website",
 image:"/projects/school.png",
 description:"Educational website with CMS and SEO optimization.",
 tech:["WordPress","SEO"]
},

{
 title:"Corporate Business Website",
 image:"/projects/business.png",
 description:"Professional company website with modern design.",
 tech:["React","Bootstrap"]
},

{
 title:"AI Automation Tool",
 image:"/projects/ai.png",
 description:"AI powered automation and business solutions.",
 tech:["AI","API","PHP"]
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
h-56
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

Demo

</a>





<a

href={project.github}

target="_blank"

className="
flex-1
border
border-gray-300
py-3
rounded-xl
flex
items-center
justify-center
gap-2
hover:bg-gray-100
transition
"

>

<FaGithub/>

Code

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