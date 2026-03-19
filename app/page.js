'use client';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience'; // Added Experience
import Projects from '../components/Projects';
import Academics from '../components/Academics';
import Awards from '../components/Awards';
import CTF from '../components/CTF';
import Leadership from '../components/Leadership';
import { Volunteering, Sports } from '../components/VolunteeringSports';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Experience /> {/* New Section */}
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Academics />
        <hr className="section-divider" />
        <Awards />
        <hr className="section-divider" />
        <CTF />
        <hr className="section-divider" />
        <Leadership />
        <hr className="section-divider" />
        <Volunteering />
        <hr className="section-divider" />
        <Sports />
        <hr className="section-divider" />
        <Contact />
      </main>
    </>
  );
}