"use client";
import dynamic from "next/dynamic";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Cursor = dynamic(() => import("./components/Cursor"), { ssr: false });

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
