import React, { useEffect, useState } from "react";
import { Phone, ArrowRight, Utensils } from "lucide-react";
import { TID } from "@/constants/testIds";
import { HERO_IMAGES, PHONE, DOORDASH_URL } from "@/data/menu";

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative h-[100vh] min-h-[640px] w-full overflow-hidden">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt=""
            className={`w-full h-full object-cover ${i === idx ? "kenburns" : ""}`}
          />
        </div>
      ))}

      {/* Dark warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,175,55,0.18),transparent_55%)]" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <div className="reveal max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 backdrop-blur-sm border border-[#D4AF37]/40 mb-7">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#FDFBF7]">
              Akron · Ohio · Since Day One
            </span>
          </div>

          <h1 className="font-display text-[#FDFBF7] text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[0.95] tracking-tight">
            Akron's <span className="italic text-[#E8C770]">Hidden Gem</span><br />
            for Soul Food Breakfast
          </h1>

          <p className="mt-7 max-w-xl text-[#FDFBF7]/85 text-lg leading-relaxed font-light">
            Homemade breakfast, brunch, comfort food & soul food classics — cooked to order, served with love, and big enough to take home leftovers.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={DOORDASH_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={TID.heroOrderBtn}
              className="group inline-flex items-center gap-2 rounded-full bg-[#8B0000] hover:bg-[#A52A2A] text-[#FDFBF7] px-7 h-13 py-3.5 font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Order Online
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#menu"
              data-testid={TID.heroMenuBtn}
              className="inline-flex items-center gap-2 rounded-full bg-[#FDFBF7]/10 hover:bg-[#FDFBF7]/20 text-[#FDFBF7] border border-[#FDFBF7]/50 px-7 py-3.5 font-semibold backdrop-blur-md transition-all"
            >
              <Utensils className="w-4 h-4" />
              View Menu
            </a>
            <a
              href={`tel:${PHONE}`}
              data-testid={TID.heroCallBtn}
              className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] hover:bg-[#E8C770] text-[#1A1818] px-7 py-3.5 font-semibold transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>

        {/* Bottom indicators + rating */}
        <div className="absolute bottom-6 left-6 md:left-10 right-6 md:right-10 flex flex-wrap items-end justify-between gap-4 text-[#FDFBF7]/80">
          <div className="flex gap-1.5">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-[3px] rounded-full transition-all ${i === idx ? "w-10 bg-[#D4AF37]" : "w-5 bg-[#FDFBF7]/40"}`}
              />
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#D4AF37] text-lg leading-none">★</span>
              ))}
            </div>
            <span>4.8 / 5 · 500+ neighborhood reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
