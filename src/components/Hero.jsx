import React from 'react';
import Spline from '@splinetool/react-spline';
import { Instagram, Mail, Camera } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center text-xs tracking-widest uppercase text-white/70 backdrop-blur rounded-full border border-white/10 px-3 py-1 mb-4">Model • Creative • Tech-forward</span>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Ava Collins
              <span className="block text-white/80 text-xl md:text-2xl mt-3 font-normal">Fashion • Editorial • Commercial</span>
            </h1>
            <p className="text-white/80 mt-6 max-w-xl">Blending modern aesthetics with interactive storytelling. Available for runway, editorial, and brand campaigns.</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#portfolio" className="inline-flex items-center px-5 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">
                <Camera className="w-4 h-4 mr-2" /> View Portfolio
              </a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/90 transition">
                <Mail className="w-4 h-4 mr-2" /> Book Me
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/90 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
