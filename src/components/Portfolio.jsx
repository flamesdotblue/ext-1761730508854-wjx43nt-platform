import React from 'react';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop',
    title: 'Editorial Series',
    tag: 'Editorial',
  },
  {
    src: 'https://images.unsplash.com/photo-1502164980785-f8aa41d53611?q=80&w=1400&auto=format&fit=crop',
    title: 'Runway Highlights',
    tag: 'Runway',
  },
  {
    src: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=1400&auto=format&fit=crop',
    title: 'Beauty Close-up',
    tag: 'Beauty',
  },
  {
    src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop',
    title: 'Commercial',
    tag: 'Commercial',
  },
  {
    src: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1400&auto=format&fit=crop',
    title: 'Studio Light',
    tag: 'Studio',
  },
  {
    src: 'https://images.unsplash.com/photo-1520975922291-569dc06c8d0e?q=80&w=1400&auto=format&fit=crop',
    title: 'Lifestyle',
    tag: 'Lifestyle',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(255,255,255,0.12),transparent)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Portfolio</h2>
            <p className="text-white/70 mt-2">A selection of fashion, editorial, and commercial work.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-full border border-white/20 hover:border-white/40 text-sm">Request Lookbook</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, idx) => (
            <figure key={idx} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={item.src} alt={item.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <span className="inline-flex px-2 py-0.5 rounded-full bg-white/10 border border-white/15">{item.tag}</span>
                </div>
                <div className="mt-2 text-base font-medium">{item.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
