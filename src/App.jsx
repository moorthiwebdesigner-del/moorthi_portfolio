import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import WhyChooseMe from "./components/WhyChooseMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import ScrollTop from "./components/ScrollTop";


function App() {
  return (
    <>
     <Hero />
      <Navbar />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <WhyChooseMe />
      <Contact />
      <Footer />
      <ScrollTop />
      <WhatsApp />
    </>
  );
}

export default App;