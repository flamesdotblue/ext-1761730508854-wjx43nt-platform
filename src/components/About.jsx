import React from 'react';

function Stat({ label, value }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-[10px] uppercase tracking-widest text-zinc-400">{label}</div>
      <div className="mt-1 text-lg font-medium">{value}</div>
    </div>
  );
}

export default function About() {
  return (
    <div className="relative bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold">About</h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            I’m Ava Carter, a New York–based fashion model specializing in editorial, runway, and beauty campaigns. My work blends classic elegance with a modern, tech-forward aesthetic. I love bringing concepts to life on set, collaborating with creative teams, and exploring innovative, interactive mediums.
          </p>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Recent clients include boutique designers and emerging tech labels. I’m represented for select bookings and available for campaigns, lookbooks, runway, and creative collaborations worldwide.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Stat label="Height" value={'5\'10"'} />
            <Stat label="Bust" value="32" />
            <Stat label="Waist" value="24" />
            <Stat label="Hips" value="34" />
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
            alt="Ava Carter portrait"
            className="h-full w-full object-cover object-center opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
