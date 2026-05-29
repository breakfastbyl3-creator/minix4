import React from "react";
import { Flame, ChefHat, Award, Coffee, Sparkles, Music } from "lucide-react";

const SECTIONS = [
  { i: Flame, t: "Soul Food Classics", d: "Catfish, chicken & waffles, shrimp & grits — the originals done right." },
  { i: ChefHat, t: "Made Fresh Daily", d: "Biscuits pulled from the oven, gravy simmered, eggs cracked to order." },
  { i: Award, t: "Customer Favorites", d: "The french toast biscuits & big breakfast keep neighbors coming back." },
  { i: Music, t: "Neighborhood Hidden Gem", d: "Soft jazz, warm light, and the kind of welcome only Highland Square can give." },
  { i: Coffee, t: "Great Coffee, Always", d: "Locally brewed and bottomless — because soul food deserves a good cup." },
  { i: Sparkles, t: "Worth Waking Up For", d: "Saturday mornings, lazy Sundays, and the best Tuesday you'll ever have." },
];

export default function Highlights() {
  return (
    <section className="relative py-24 md:py-32 bg-[#1A1818] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(212,175,55,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(139,0,0,0.25),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs font-semibold mb-4">
            What Sets Us Apart
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FDFBF7] leading-tight">
            Six reasons folks <span className="italic text-[#E8C770]">never just visit once.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTIONS.map(({ i: Icon, t, d }) => (
            <div
              key={t}
              className="group p-7 rounded-3xl bg-[#FDFBF7]/5 backdrop-blur-md border border-[#FDFBF7]/10 hover:border-[#D4AF37]/50 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#8B0000] text-[#FDFBF7] flex items-center justify-center mb-5 group-hover:bg-[#D4AF37] group-hover:text-[#1A1818] transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl text-[#FDFBF7] mb-2">{t}</h3>
              <p className="text-sm text-[#FDFBF7]/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
