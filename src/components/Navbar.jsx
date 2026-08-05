import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name:"Home", href:"#home" },
    { name:"About", href:"#about" },
    { name:"Services", href:"#services" },
    { name:"Projects", href:"#projects" },
    { name:"Skills", href:"#skills" },
    { name:"Experience", href:"#experience" },
    { name:"Contact", href:"#contact" },
  ];


  return (

<header className="
sticky top-0 z-50
bg-white/80
backdrop-blur-xl
border-b
shadow-sm
">


<div className="
container mx-auto
h-20
px-5
flex
items-center
justify-between
">


{/* Logo */}

<a href="#home" className="flex items-center gap-3">

<div className="
w-12 h-12
rounded-xl
bg-gradient-to-br
from-blue-600
to-indigo-600
text-white
flex
items-center
justify-center
font-black
text-2xl
">

M

</div>


<div>

<h2 className="font-black text-xl">
Moorthi
</h2>

<p className="
text-[10px]
tracking-[3px]
text-blue-600
font-semibold
">
PORTFOLIO
</p>

</div>

</a>



{/* Desktop */}

<nav className="hidden md:flex gap-7">

{
links.map((link)=>(
<a
key={link.name}
href={link.href}
className="
text-gray-700
hover:text-blue-600
font-medium
text-sm
transition
"
>

{link.name}

</a>
))
}

</nav>



<a
href="#contact"
className="
hidden md:block
bg-blue-600
text-white
px-6
py-3
rounded-xl
font-semibold
"
>
Let's Talk
</a>



{/* Mobile Button */}

<button
onClick={()=>setMenuOpen(true)}
className="
md:hidden
text-2xl
text-gray-800
"
>

<FaBars/>

</button>


</div>



{/* Overlay */}

{
menuOpen &&

<div
onClick={()=>setMenuOpen(false)}
className="
fixed
inset-0
bg-black/40
md:hidden
"
/>

}




{/* Mobile Drawer */}

<div
className={`
fixed
top-0
right-0
h-screen
w-[85%]
max-w-sm
bg-white
shadow-2xl
z-50
transform
transition-transform
duration-300
md:hidden

${menuOpen 
? "translate-x-0"
: "translate-x-full"
}

`}
>


<div className="
h-20
px-6
flex
items-center
justify-between
border-b
">


<h2 className="
text-2xl
font-black
text-blue-600
">
Menu
</h2>


<button
onClick={()=>setMenuOpen(false)}
className="text-2xl"
>

<FaTimes/>

</button>


</div>



<nav className="p-6 space-y-2">


{
links.map((link)=>(

<a
key={link.name}
href={link.href}
onClick={()=>setMenuOpen(false)}
className="
block
px-4
py-4
rounded-xl
text-gray-700
font-semibold
hover:bg-blue-50
hover:text-blue-600
transition
"
>

{link.name}

</a>

))
}



<a
href="#contact"
onClick={()=>setMenuOpen(false)}
className="
block
mt-5
text-center
bg-blue-600
text-white
py-4
rounded-xl
font-bold
"
>

Let's Talk

</a>


</nav>


</div>


</header>

  );
}


export default Navbar;