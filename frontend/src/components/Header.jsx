import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TID } from "@/constants/testIds";
import { PHONE, PHONE_DISPLAY, DOORDASH_URL } from "@/data/menu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#menu", label: "Menu", tid: TID.navMenu },
    { href: "#about", label: "About", tid: TID.navAbout },
    { href: "#reviews", label: "Reviews", tid: TID.navReviews },
    { href: "#catering", label: "Catering", tid: TID.navCatering },
    { href: "#location", label: "Visit", tid: TID.navLocation },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#FDFBF7]/85 backdrop-blur-xl shadow-[0_1px_0_rgba(92,64,51,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <a href="#top" data-testid={TID.headerLogo} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-[#8B0000] flex items-center justify-center text-[#FDFBF7] font-display text-lg shadow-md group-hover:scale-105 transition-transform">
            L
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg md:text-xl text-[#1A1818]">Breakfast in Bed</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#5C4033]">by LaCole</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.tid}
              className="text-sm font-medium text-[#1A1818] hover:text-[#8B0000] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            data-testid={TID.callNowBtn}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1818] hover:text-[#8B0000] transition-colors"
          >
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
          <Button
            asChild
            data-testid={TID.orderOnlineBtn}
            className="rounded-full bg-[#8B0000] hover:bg-[#A52A2A] text-[#FDFBF7] px-5 h-10 font-semibold shadow-md"
          >
            <a href={DOORDASH_URL} target="_blank" rel="noopener noreferrer">Order Online</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-[#1A1818]"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          data-testid="mobile-menu-toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#FDFBF7]/95 backdrop-blur-xl border-t border-[rgba(92,64,51,0.12)]">
          <nav className="px-6 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#1A1818]"
              >
                {l.label}
              </a>
            ))}
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
            <a
              href={DOORDASH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#8B0000] text-white px-5 h-10 font-semibold w-fit"
            >
              Order Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
