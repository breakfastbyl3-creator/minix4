import React from "react";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";
import { REVIEWS, initials, avatarColor, OWNER_RESPONSES } from "@/data/reviews";

function ReviewCard({ r }) {
  const response = OWNER_RESPONSES[r.name];
  return (
    <div className="w-[340px] md:w-[380px] mx-3 bg-white rounded-2xl border border-[rgba(92,64,51,0.12)] p-5 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/60 transition-all duration-500">
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0"
          style={{ backgroundColor: avatarColor(r.name) }}
        >
          {initials(r.name)}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-[#1A1818] text-sm">{r.name}</div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(r.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <span className="text-[11px] text-[#5C4033]">{r.date}</span>
          </div>
        </div>
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22 12a10 10 0 1 0-11.6 9.9V14.9H8V12h2.4V9.9c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12H16l-.4 2.9h-2.2v7c4.7-.7 8.6-4.7 8.6-9.9Z"/>
        </svg>
      </div>
      <p className="text-sm text-[#1A1818]/85 leading-relaxed">
        {r.highlight ? (
          <>
            {r.text.split(r.highlight)[0]}
            <span className="bg-[#D4AF37]/30 px-1 rounded">{r.highlight}</span>
            {r.text.split(r.highlight)[1]}
          </>
        ) : (
          r.text
        )}
      </p>
      {response && (
        <div className="mt-4 pl-3 border-l-2 border-[#8B0000] text-xs text-[#5C4033] italic">
          <span className="font-semibold not-italic text-[#8B0000]">Owner response:</span> {response}
        </div>
      )}
    </div>
  );
}

export default function ReviewsWall() {
  const row1 = REVIEWS.slice(0, 15);
  const row2 = REVIEWS.slice(15, 30);
  const row3 = REVIEWS.slice(30);

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-[#1A1818] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,0,0,0.35),transparent_55%)]" />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-12">
          <div className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs font-semibold mb-4">
            Why Akron Loves Us
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FDFBF7] leading-tight">
            500+ neighbors. <span className="italic text-[#E8C770]">One verdict.</span>
          </h2>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-[#FDFBF7]/80">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="font-display text-2xl">4.8</span>
            </div>
            <div className="text-xs uppercase tracking-widest">From Google Reviews</div>
          </div>
        </div>

        <div className="space-y-5">
          <Marquee speed={32} gradient={false} pauseOnHover>
            {row1.map((r) => <ReviewCard key={r.name} r={r} />)}
          </Marquee>
          <Marquee speed={28} gradient={false} pauseOnHover direction="right">
            {row2.map((r) => <ReviewCard key={r.name} r={r} />)}
          </Marquee>
          <Marquee speed={34} gradient={false} pauseOnHover>
            {row3.map((r) => <ReviewCard key={r.name} r={r} />)}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
