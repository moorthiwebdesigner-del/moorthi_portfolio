import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import FadeIn from "./FadeIn";


function Contact() {

  const form = useRef();


  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_xve1ir7",
        "template_r3bxmdg",
        form.current,
        "-cEqtfv-YP06hJ5vh"
      )
      .then(() => {

        alert("✅ Message Sent Successfully!");
        form.current.reset();

      })
      .catch(() => {

        alert("❌ Failed to send message.");

      });

  };


  const contactInfo = [
    {
      icon:<FaEnvelope/>,
      title:"Email",
      value:"moorthiwebdesigner@gmail.com",
      color:"bg-blue-600"
    },
    {
      icon:<FaWhatsapp/>,
      title:"WhatsApp",
      value:"+91 9629301506",
      color:"bg-green-600"
    },
    {
      icon:<FaPhoneAlt/>,
      title:"Phone",
      value:"+91 9629301506",
      color:"bg-purple-600"
    },
    {
      icon:<FaMapMarkerAlt/>,
      title:"Location",
      value:"Chennai, Tamil Nadu, India",
      color:"bg-red-500"
    }
  ];


return (

<section
id="contact"
className="py-20 sm:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50"
>


<div className="container mx-auto max-w-7xl px-5 sm:px-6">


{/* Heading */}

<FadeIn>

<div className="text-center mb-12 sm:mb-16">


<span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
Contact Me
</span>


<h2 className="text-3xl sm:text-5xl font-black mt-5">
Let's Start Your Project
</h2>


<p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8">
Looking for a modern website, CRM, Shopify Store or React
application? Let's discuss your project.
</p>


</div>

</FadeIn>



<div className="grid lg:grid-cols-2 gap-8 lg:gap-10">



{/* LEFT */}

<FadeIn>


<div className="
bg-white/70 
backdrop-blur-xl 
rounded-3xl 
p-5 
sm:p-8 
shadow-xl 
border 
border-white
h-full
flex
flex-col
justify-between
">


<div>


<span className="
inline-block
bg-green-100
text-green-700
px-4
py-2
rounded-full
font-semibold
text-sm
">

🟢 Available for Opportunities

</span>



<h3 className="
text-3xl
sm:text-4xl
font-black
mt-6
">

Let's Work Together

</h3>



<p className="
text-gray-600
leading-8
mt-5
">

I help businesses create modern digital solutions
with beautiful design, powerful functionality
and better user experience.

</p>



<div className="space-y-6 mt-10">


{contactInfo.map((item,index)=>(


<div
key={index}
className="
flex
items-center
gap-4
"
>


<div
className={`
w-12 h-12
sm:w-16 sm:h-16
rounded-2xl
${item.color}
text-white
flex
items-center
justify-center
text-xl
sm:text-2xl
shrink-0
`}
>

{item.icon}

</div>



<div className="min-w-0">


<h4 className="font-bold text-lg">

{item.title}

</h4>



<p className="
text-gray-600
text-sm
sm:text-base
break-all
">

{item.value}

</p>


</div>


</div>


))}


</div>


</div>



<div>


<div className="
flex
flex-col
sm:flex-row
gap-4
mt-10
">


<a
href="https://wa.me/919629301506"
target="_blank"
rel="noreferrer"
className="
w-full
bg-green-600
hover:bg-green-700
text-white
rounded-xl
py-4
text-center
font-semibold
transition
"
>

WhatsApp

</a>



<a
href="mailto:moorthiwebdesigner@gmail.com"
className="
w-full
bg-blue-600
hover:bg-blue-700
text-white
rounded-xl
py-4
text-center
font-semibold
transition
"
>

Email Me

</a>


</div>



<div className="
mt-8
bg-blue-600
rounded-2xl
p-5
sm:p-6
text-white
">


<h4 className="text-xl font-bold">

⚡ Quick Response

</h4>


<p className="mt-3 leading-7">

I usually respond quickly and will get back
to you regarding your project requirements.

</p>


</div>


</div>



</div>


</FadeIn>





{/* RIGHT FORM */}


<FadeIn>


<form
ref={form}
onSubmit={sendEmail}
className="
bg-white/70
backdrop-blur-xl
rounded-3xl
p-5
sm:p-8
shadow-xl
border
border-white
h-full
flex
flex-col
"
>


<h3 className="text-2xl sm:text-3xl font-bold">

Send Me a Message

</h3>



<p className="text-gray-500 mt-3 mb-8 leading-7">

Fill your details and I'll contact you soon.

</p>



<div className="grid md:grid-cols-2 gap-5">


<input
name="name"
required
placeholder="Your Name"
className="
w-full
p-4
rounded-xl
border
border-gray-300
"
/>


<input
name="email"
type="email"
required
placeholder="Your Email"
className="
w-full
p-4
rounded-xl
border
border-gray-300
"
/>


</div>



<input
name="subject"
required
placeholder="Subject"
className="
w-full
mt-5
p-4
rounded-xl
border
border-gray-300
"
/>



<textarea
name="message"
rows="6"
required
placeholder="Tell me about your project..."
className="
w-full
mt-5
p-4
rounded-xl
border
border-gray-300
resize-none
"
/>



<div className="mt-8">


<div className="
bg-slate-100
rounded-2xl
p-5
mb-6
">


<h4 className="font-bold text-lg">

📌 Project Discussion

</h4>


<p className="text-gray-600 mt-2 leading-7">

Need React Website, WordPress Website,
Shopify Store, CRM System or Full Stack Application?

</p>


</div>



<button
type="submit"
className="
w-full
bg-blue-600
hover:bg-blue-700
text-white
rounded-xl
py-4
text-lg
font-bold
transition
shadow-lg
"
>

Send Project Enquiry →

</button>


</div>



</form>


</FadeIn>


</div>


</div>


</section>

);

}


export default Contact;