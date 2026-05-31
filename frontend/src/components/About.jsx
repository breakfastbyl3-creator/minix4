import React from "react";
import { Heart, Coffee, Music, Sparkles } from "lucide-react";
import { INTERIOR_IMG } from "@/data/menu";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#F3EBE1] overflow-hidden">
      <div className="absolute inset-0 grain-bg pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={INTERIOR_IMG}
                alt="Warm cozy restaurant interior"
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B0000]/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-7 -right-4 md:-right-10 bg-white rounded-2xl shadow-xl px-6 py-5 max-w-[260px] border border-[rgba(92,64,51,0.12)]">
              <div className="flex items-center gap-2 text-[#8B0000] font-display text-2xl">
                ★ 4.8
              </div>
              <p className="text-xs text-[#5C4033] mt-1">From 500+ neighbors who keep coming back.</p>
            </div>
            {/* Jazz badge */}
            <div className="hidden md:flex absolute -top-6 -left-6 items-center gap-2 px-4 py-2 rounded-full bg-[#1A1818] text-[#D4AF37] shadow-lg">
              <Music className="w-4 h-4" /> <span className="text-xs tracking-widest uppercase">Jazz Vibes Inside</span>
            </div>
          </div>

          <div>
            <div className="text-[#8B0000] uppercase tracking-[0.35em] text-xs font-semibold mb-4">
              Our Story · Black-Owned · Akron Made
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[#1A1818] leading-tight mb-6">
              The neighborhood spot that <span className="italic text-[#8B0000]">cooks like grandma did.</span>
            </h2>
            <div className="space-y-4 text-[#1A1818]/85 leading-relaxed">
              <p>
                Breakfast in Bed by LaCole began with a simple belief: real soul food is made slow, seasoned right, and served with the warmth of family. Every morning, LaCole and her team show up early to prep french toast biscuits, fluffy pancakes, fish & grits, and the big breakfast plates folks travel across Ohio to taste.
              </p>
              <p>
                We're proud to be a Black-owned, family-run breakfast restaurant tucked into Highland Square. Cooked-to-order plates. Big portions. Soft jazz in the background. The kind of place where strangers leave as regulars.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-4">
              {[
                { i: Heart, t: "Homemade with love", d: "Every plate, every day." },
                { i: Sparkles, t: "Huge portions", d: "Leftovers guaranteed." },
                { i: Coffee, t: "Cooked to order", d: "Worth the short wait." },
                { i: Music, t: "Cozy jazz vibe", d: "Stay a while." },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="flex gap-3 p-4 rounded-2xl bg-white/70 backdrop-blur border border-[rgba(92,64,51,0.12)]">
                  <div className="w-10 h-10 rounded-xl bg-[#8B0000] text-[#FDFBF7] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A1818] text-sm">{t}</div>
                    <div className="text-xs text-[#5C4033]">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
