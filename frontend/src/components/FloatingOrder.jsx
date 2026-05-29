import React from "react";
import { ShoppingBag } from "lucide-react";
import { DOORDASH_URL } from "@/data/menu";
import { TID } from "@/constants/testIds";

export default function FloatingOrder() {
  return (
    <a
      href={DOORDASH_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={TID.floatingOrderBtn}
      className="fixed z-40 bottom-20 right-5 md:bottom-7 md:right-44 inline-flex items-center gap-2 rounded-full bg-[#8B0000] hover:bg-[#A52A2A] text-[#FDFBF7] px-5 md:px-6 h-13 py-3.5 font-semibold shadow-2xl pulse-glow transition-all hover:-translate-y-0.5"
    >
      <ShoppingBag className="w-5 h-5" />
      <span className="hidden sm:inline">Order Online</span>
    </a>
  );
}
