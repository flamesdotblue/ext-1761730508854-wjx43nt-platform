import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">About</h2>
            <p className="mt-5 text-white/80 leading-relaxed">I am a New York-based model focused on editorial, runway, and commercial work. My approach blends strong movement, clean lines, and contemporary style. I love collaborating with creative teams and brands to craft memorable, elevated visuals.</p>
            <p className="mt-4 text-white/70">Open to travel. Comfortable with studio and on-location shoots. Experienced in fashion week, lookbooks, beauty, and lifestyle campaigns.</p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Stat label="Height" value="5'10\"" />
              <Stat label="Bust" value="32" />
              <Stat label="Waist" value="24" />
              <Stat label="Hips" value="35" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop" alt="Editorial portrait" className="rounded-lg object-cover h-64 w-full" />
            <img src="https://images.unsplash.com/photo-1761163337557-827da2d40001?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSdW53YXklMjBzdHlsZXxlbnwwfDB8fHwxNzYxNzMwNTk0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Runway style" className="rounded-lg object-cover h-64 w-full" />
            <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop" alt="Beauty close-up" className="rounded-lg object-cover h-56 w-full col-span-2" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}
