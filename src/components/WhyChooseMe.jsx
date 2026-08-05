import {
  FaBusinessTime,
  FaCode,
  FaPalette,
  FaRocket,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

import FadeIn from "./FadeIn";


function WhyChooseMe() {


const features = [


{
icon:<FaBusinessTime/>,
title:"Business Focused",
desc:
"I create digital solutions that help businesses improve workflow, reach customers and grow online."
},


{
icon:<FaCode/>,
title:"Clean Development",
desc:
"Well structured, maintainable and scalable code following modern development practices."
},


{
icon:<FaPalette/>,
title:"Premium UI/UX",
desc:
"Modern interfaces designed with focus on usability, branding and better user experience."
},


{
icon:<FaRocket/>,
title:"High Performance",
desc:
"Optimized websites with fast loading speed, smooth experience and responsive layouts."
},


{
icon:<FaChartLine/>,
title:"SEO Ready",
desc:
"Websites built with search visibility, performance and online growth in mind."
},


{
icon:<FaHeadset/>,
title:"Reliable Support",
desc:
"Continuous support and maintenance to keep your digital solutions running smoothly."
},


];





return (


<section
id="why"
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
Why Choose Me
</p>



<h2
className="
text-4xl
md:text-5xl
font-black
mt-3
"
>

Why Work With Me?

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

Combining development, design and business
understanding to deliver complete digital solutions.

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
features.map((item,index)=>(


<FadeIn key={index}>


<div
className="
bg-white
rounded-3xl
p-8
border
border-gray-100
shadow-md
hover:shadow-xl
hover:-translate-y-2
transition
duration-300
h-full
"
>


<div
className="
w-16
h-16
rounded-2xl
bg-blue-600
text-white
flex
items-center
justify-center
text-3xl
mb-6
"
>

{item.icon}

</div>




<h3
className="
text-2xl
font-bold
mb-4
"
>

{item.title}

</h3>




<p
className="
text-gray-600
leading-8
"
>

{item.desc}

</p>



</div>



</FadeIn>


))
}



</div>



</div>


</section>


);


}


export default WhyChooseMe;