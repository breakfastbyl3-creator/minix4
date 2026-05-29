import React from "react";
import { Star, Truck, Package, UtensilsCrossed, Users, Heart, Flame, Wifi, Coffee, Baby, Accessibility, BellRing } from "lucide-react";

const ICONS = { Star, Truck, Package, UtensilsCrossed, Users, Heart, Flame, Wifi, Coffee, Baby, Accessibility, BellRing };

const ITEMS = [
  { label: "4.8 Star Rating", icon: "Star" },
  { label: "Delivery", icon: "Truck" },
  { label: "Pickup", icon: "Package" },
  { label: "Dine-In", icon: "UtensilsCrossed" },
  { label: "Catering", icon: "Users" },
  { label: "Family Friendly", icon: "Heart" },
  { label: "Cozy Atmosphere", icon: "Flame" },
  { label: "Free Wi-Fi", icon: "Wifi" },
  { label: "Great Coffee", icon: "Coffee" },
  { label: "Good for Kids", icon: "Baby" },
  { label: "Wheelchair Accessible", icon: "Accessibility" },
  { label: "Table Service", icon: "BellRing" },
];

export default function Amenities() {
  return (
    <section className="bg-[#FDFBF7] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="text-[#8B0000] uppercase tracking-[0.35em] text-xs font-semibold mb-3">
            Why You'll Stay Awhile
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#1A1818]">
            The little things, done right.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {ITEMS.map((b, i) => {
            const Icon = ICONS[b.icon];
            return (
              <div
                key={b.label}
                className="group flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-white border border-[rgba(92,64,51,0.12)] hover:border-[#D4AF37] hover:bg-[#F3EBE1] transition-all cursor-default text-center"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="w-11 h-11 rounded-full bg-[#8B0000]/8 text-[#8B0000] flex items-center justify-center group-hover:bg-[#8B0000] group-hover:text-[#FDFBF7] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-[#1A1818] leading-tight">{b.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
