import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md/0 bg-black/20 supports-[backdrop-filter]:backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight">Ava Carter</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-zinc-300">About</a>
            <a href="#portfolio" className="hover:text-zinc-300">Portfolio</a>
            <a href="#contact" className="hover:text-zinc-300">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-xs text-zinc-400">
          © {new Date().getFullYear()} Ava Carter — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
