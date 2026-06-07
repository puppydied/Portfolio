import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Cybersec from "@/components/Cybersec";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c10]">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Cybersec />
      <Contact />
      <Footer />
    </div>
  )
}
