import React from "react";
import { MapPin, Clock, Phone, Navigation, Car } from "lucide-react";
import { ADDRESS, PHONE, PHONE_DISPLAY, HOURS } from "@/data/menu";
import { TID } from "@/constants/testIds";

export default function LocationHours() {
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

  return (
    <section id="location" className="relative py-24 md:py-32 bg-[#F3EBE1]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="rounded-3xl overflow-hidden h-[460px] lg:h-auto shadow-xl border border-[rgba(92,64,51,0.15)]">
            <iframe
              title="Breakfast in Bed by LaCole - Akron OH"
              src={embedUrl}
              className="w-full h-full min-h-[460px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col">
            <div className="text-[#8B0000] uppercase tracking-[0.35em] text-xs font-semibold mb-4">
              Come See Us
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[#1A1818] leading-tight mb-8">
              Tucked into <span className="italic text-[#8B0000]">Highland Square.</span>
            </h2>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#8B0000] text-[#FDFBF7] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A1818] mb-0.5">Address</div>
                  <div className="text-sm text-[#5C4033]">{ADDRESS}</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#8B0000] text-[#FDFBF7] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A1818] mb-0.5">Phone</div>
                  <a href={`tel:${PHONE}`} data-testid={TID.locationCall} className="text-sm text-[#8B0000] hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#8B0000] text-[#FDFBF7] flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A1818] mb-0.5">Parking</div>
                  <div className="text-sm text-[#5C4033]">Free street parking & nearby lots in Highland Square.</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#8B0000] text-[#FDFBF7] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[#1A1818] mb-2">Hours</div>
                  <ul className="text-sm space-y-1">
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6 max-w-xs">
                        <span className="text-[#1A1818]">{h.day}</span>
                        <span className={h.closed ? "text-[#8B0000] font-semibold" : "text-[#5C4033]"}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={TID.directionsBtn}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1818] hover:bg-[#8B0000] text-[#FDFBF7] px-7 h-12 font-semibold transition-all w-fit"
            >
              <Navigation className="w-4 h-4" /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
