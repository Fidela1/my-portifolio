import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;