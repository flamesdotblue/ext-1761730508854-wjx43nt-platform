import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=1600&auto=format&fit=crop',
    alt: 'Editorial studio set in cool tones',
  },
  {
    src: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1600&auto=format&fit=crop',
    alt: 'Runway look with structured silhouette',
  },
  {
    src: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1600&auto=format&fit=crop',
    alt: 'Beauty campaign in soft light',
  },
  {
    src: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1600&auto=format&fit=crop',
    alt: 'Outdoor fashion editorial',
  },
  {
    src: 'https://images.unsplash.com/photo-1516570161787-2fd917215a3d?q=80&w=1600&auto=format&fit=crop',
    alt: 'Minimal monochrome fashion set',
  },
  {
    src: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1600&auto=format&fit=crop',
    alt: 'Street style campaign',
  },
];

export default function Portfolio() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Portfolio</h2>
            <p className="mt-2 text-zinc-300">A selection of campaigns, editorials, and runway moments.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-white/15 text-sm hover:bg-white/10 transition">Book a shoot</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <img
                src={img.src}
                alt={img.alt}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs text-zinc-200 bg-gradient-to-t from-black/70 to-transparent">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
