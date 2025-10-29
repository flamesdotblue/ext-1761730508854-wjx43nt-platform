import React from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold">Contact</h2>
          <p className="mt-2 text-zinc-300">For bookings, press, and collaborations, please reach out.</p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3 text-zinc-300">
              <Mail size={18} />
              <a className="hover:underline" href="mailto:bookings@avacarter.studio">bookings@avacarter.studio</a>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <Phone size={18} />
              <a className="hover:underline" href="tel:+12125551234">+1 (212) 555-1234</a>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <Instagram size={18} />
              <a className="hover:underline" href="https://instagram.com" target="_blank" rel="noreferrer">@ava.carter</a>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <MapPin size={18} />
              <span>Based in New York • Available worldwide</span>
            </div>
          </div>
        </div>

        <form
          className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur supports-[backdrop-filter]:bg-white/5"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const name = data.get('name');
            const email = data.get('email');
            const subject = encodeURIComponent(`Booking inquiry — ${name}`);
            const body = encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\nAgency: ${data.get('agency')}\n\n${data.get('message')}`
            );
            window.location.href = `mailto:bookings@avacarter.studio?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-zinc-400 mb-1">Name</label>
              <input name="name" required className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-zinc-400 mb-1">Agency (optional)</label>
              <input name="agency" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-zinc-400 mb-1">Message</label>
              <textarea name="message" rows={5} required className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
            </div>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-white text-black text-sm font-medium hover:opacity-90">
            Send inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
