import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-black/20 to-black" />

      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
              Fashion Model Portfolio
            </h1>
            <p className="mt-4 text-zinc-300 text-base sm:text-lg">
              Tech-forward, modern, and playful. Explore campaigns, editorials, and runway moments in an interactive space.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#portfolio" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-black text-sm font-medium transition hover:opacity-90">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition">
                Book Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
