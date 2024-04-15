"use client";

import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import Image from "next/image";
const PhoneSection = () => {
  return (
    <section className="grid place-content-center bg-neutral-900 p-12">
      <FloatingPhone />
    </section>
  );
};

export default function FloatingPhone() {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-gray-800"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-gray-900 border-l-gray-900 border-t-gray-900 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
}

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-gray-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-gray-600" />
        <FiBatteryCharging className="text-gray-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      {/* Example logo from logoispum */}
      <Image
        src="/computer-hat-small.png"
        width={271}
        height={315}
        alt="footer-image"
        className="mx-auto"
      />

      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg  bg-black py-2 text-sm font-lg font-bold text-white ">
        <h1>Rax W</h1>
      </button>

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-gray-400" />
    </div>
  );
};
