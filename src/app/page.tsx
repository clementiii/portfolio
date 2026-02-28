import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Showcase from "@/components/Showcase";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Showcase />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

