import React from 'react';
import { Mail, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Bookings & Inquiries</h2>
            <p className="text-white/80 mt-4">For collaborations, campaigns, and bookings, please share your details. My team will respond within 24 hours.</p>
            <div className="mt-6 space-y-3 text-white/80">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> bookings@avacollins.com</p>
              <a className="flex items-center gap-2 hover:text-white transition" href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="w-4 h-4" /> @avacollins
              </a>
            </div>
          </div>

          <form className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name">
                <input required type="text" placeholder="Your full name" className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/30" />
              </Field>
              <Field label="Email">
                <input required type="email" placeholder="you@example.com" className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/30" />
              </Field>
            </div>
            <Field label="Project Details">
              <textarea rows={5} placeholder="Date, location, concept, references" className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/30" />
            </Field>
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Preferred Date">
                <input type="date" className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/30" />
              </Field>
              <Field label="Type">
                <select className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/30">
                  <option>Editorial</option>
                  <option>Runway</option>
                  <option>Commercial</option>
                  <option>Beauty</option>
                  <option>Lifestyle</option>
                </select>
              </Field>
            </div>
            <button type="submit" className="w-full md:w-auto inline-flex items-center px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition">Send Request</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-sm text-white/70">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
