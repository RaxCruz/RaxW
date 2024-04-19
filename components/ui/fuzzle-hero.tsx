"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import RevealSole from "./reveal_sole";

export default function FuzzyOverlayHero() {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
}

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("/black-noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
      <RevealSole>
        {" "}
        <p className="text-center text-6xl font-black text-neutral-50">
          Rax Designs Websites
        </p>
      </RevealSole>
      <RevealSole>
        {" "}
        <p className="text-center text-neutral-400">
          室內設計般，量身訂做，打造你的專屬網站 📺
        </p>
      </RevealSole>

      <div className="flex items-center justify-center gap-3">
        <Link href="#flow_section">
          <RevealSole>
            {" "}
            <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
              Pricing
            </button>
          </RevealSole>
        </Link>
        <Link href="https://www.instagram.com/peter030910/" target="_blank">
          <RevealSole>
            {" "}
            <button className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50">
              社群逛逛
            </button>
          </RevealSole>
        </Link>
      </div>
    </div>
  );
};
