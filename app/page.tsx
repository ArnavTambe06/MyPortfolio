import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-bg text-text">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
