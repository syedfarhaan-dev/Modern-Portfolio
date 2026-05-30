/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans selection:bg-purple-500/20 selection:text-purple-300 relative overflow-x-hidden antialiased">
      {/* Upper absolute glow mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-purple-950/10 via-indigo-950/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Structured Portfolio Frame */}
      <Header />
      <Hero />
      <main>
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
