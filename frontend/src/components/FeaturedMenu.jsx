import React from "react";
import { FEATURED_MENU, MENU_CATEGORIES } from "@/data/menu";

export default function FeaturedMenu() {
  return (
    <section id="menu" className="relative py-24 md:py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-7">
            <div className="text-[#8B0000] uppercase tracking-[0.35em] text-xs font-semibold mb-4">
              Customer Favorites · Made Fresh Daily
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1A1818] leading-tight">
              Breakfast worth <span className="italic text-[#8B0000]">waking up</span> for.
            </h2>
          </div>
          <p className="md:col-span-5 text-[#5C4033] text-lg leading-relaxed">
            Every plate is cooked to order in our little kitchen on Portage Path — generous portions, homemade flavor, and the kind of seasoning that makes folks drive from out of town.
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_MENU.map((item, i) => (
            <article
              key={item.name}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[rgba(92,64,51,0.12)] hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative h-64 overflow-hidden bg-[#F3EBE1]">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Steam effect */}
                <div className="pointer-events-none absolute inset-0">
                  <span className="steam-puff" style={{ left: "30%", animationDelay: "0s" }} />
                  <span className="steam-puff" style={{ left: "55%", animationDelay: "1.2s" }} />
                  <span className="steam-puff" style={{ left: "75%", animationDelay: "2.4s" }} />
                </div>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1A1818]/85 backdrop-blur text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-display text-xl text-[#1A1818] leading-tight">{item.name}</h3>
                  <span className="font-display text-lg text-[#8B0000] shrink-0">{item.price}</span>
                </div>
                <p className="text-sm text-[#5C4033] leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Categories chip row */}
        <div className="mt-16 pt-10 border-t border-[rgba(92,64,51,0.12)]">
          <div className="text-center mb-6 text-[#5C4033] text-sm tracking-[0.3em] uppercase">
            Full Menu Categories
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {MENU_CATEGORIES.map((c) => (
              <div
                key={c.key}
                className="group flex flex-col items-start px-5 py-3 rounded-2xl bg-white border border-[rgba(92,64,51,0.15)] hover:border-[#8B0000] hover:bg-[#8B0000] transition-all cursor-default"
              >
                <span className="font-display text-base text-[#1A1818] group-hover:text-[#FDFBF7]">
                  {c.name}
                </span>
                <span className="text-[11px] text-[#5C4033] group-hover:text-[#FDFBF7]/85">
                  {c.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
