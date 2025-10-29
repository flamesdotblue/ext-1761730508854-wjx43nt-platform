import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-wide">Ava Collins</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-white/80 transition">About</a>
            <a href="#portfolio" className="hover:text-white/80 transition">Portfolio</a>
            <a href="#contact" className="hover:text-white/80 transition">Contact</a>
          </nav>
          <a href="#contact" className="ml-4 inline-flex items-center px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition">
            Book Me
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Ava Collins. All rights reserved.</p>
          <p>Based in NYC • Available for travel</p>
        </div>
      </footer>
    </div>
  );
}
