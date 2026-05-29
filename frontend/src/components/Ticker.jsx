import React from "react";
import Marquee from "react-fast-marquee";

const TICKER = [
  "Best breakfast in Akron",
  "★★★★★",
  "Huge portions",
  "Made fresh daily",
  "★★★★★",
  "French toast biscuits = legendary",
  "Cooked with love",
  "★★★★★",
  "Neighborhood hidden gem",
  "Soul food classics",
  "★★★★★",
  "Open for catering",
];

export default function Ticker() {
  return (
    <div className="bg-[#8B0000] text-[#FDFBF7] py-4 border-y border-[#D4AF37]/30">
      <Marquee speed={45} gradient={false}>
        {TICKER.map((t, i) => (
          <span key={i} className="font-display italic text-lg md:text-xl mx-10 flex items-center gap-3">
            {t}
            <span className="text-[#D4AF37]">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
