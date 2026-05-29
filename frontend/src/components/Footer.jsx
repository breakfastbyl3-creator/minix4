import React from "react";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { PHONE, PHONE_DISPLAY, ADDRESS, DOORDASH_URL } from "@/data/menu";

export default function Footer() {
  return (
    <footer className="bg-[#1A1818] text-[#FDFBF7] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-[#FDFBF7]/15">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#8B0000] flex items-center justify-center font-display text-2xl">L</div>
              <div>
                <div className="font-display text-2xl">Breakfast in Bed</div>
                <div className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">by LaCole LLC</div>
              </div>
            </div>
            <p className="text-sm text-[#FDFBF7]/70 max-w-md leading-relaxed">
              Akron's hidden gem for soul food breakfast. Homemade, generous, and seasoned with love — every plate, every morning.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="w-10 h-10 rounded-full bg-[#FDFBF7]/10 hover:bg-[#D4AF37] hover:text-[#1A1818] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a aria-label="Facebook" href="#" className="w-10 h-10 rounded-full bg-[#FDFBF7]/10 hover:bg-[#D4AF37] hover:text-[#1A1818] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4">Visit</div>
            <div className="flex gap-2 text-sm text-[#FDFBF7]/85"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />{ADDRESS}</div>
            <a href={`tel:${PHONE}`} className="mt-3 flex gap-2 text-sm text-[#FDFBF7]/85 hover:text-[#D4AF37]"><Phone className="w-4 h-4" />{PHONE_DISPLAY}</a>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4">Hours</div>
            <ul className="text-sm space-y-1 text-[#FDFBF7]/85">
              <li>Tue–Sun · 9 AM – 2 PM</li>
              <li className="text-[#8B0000] font-semibold">Monday · Closed</li>
            </ul>
            <a href={DOORDASH_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center rounded-full bg-[#D4AF37] text-[#1A1818] px-5 h-10 text-sm font-semibold hover:bg-[#E8C770] transition-colors">
              Order on DoorDash
            </a>
          </div>
        </div>

        <div className="pt-7 flex flex-col md:flex-row md:justify-between gap-3 text-xs text-[#FDFBF7]/55">
          <div>© {new Date().getFullYear()} Breakfast in Bed by LaCole LLC. All rights reserved.</div>
          <div>Proudly Black-owned · Akron, OH</div>
        </div>
      </div>
    </footer>
  );
}
