"use client";
import {
  FiBarChart,
  FiBell,
  FiDollarSign,
  FiInfo,
  FiPlay,
  FiShare,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react";
import {
  CodeXml,
  Handshake,
  MessageSquareCode,
  ReplyAll,
  SquareArrowOutUpRight,
  UserCheck,
} from "lucide-react";

export default function VerticalAccordion() {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full  mx-auto shadow overflow-hidden text-card-foreground rounded-lg shadow-sm border-2 rounded-lg">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
}

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-card hover:bg-primary transition-colors p-3 border-secondary hover:border-primary border-r-[2px] border-b-[2px]  flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group hover:text-primary-foreground"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-0"
        >
          <h1>{title}</h1>
        </span>
        <span className="block lg:hidden text-xl font-light">
          {" "}
          <h1>{title}</h1>
        </span>
        <div className="w-6 lg:w-full aspect-square grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-card group-hover:bg-primary transition-colors rounded-sm border-input group-hover:border-primary border-r-[2px] border-b-[2px] lg:border-b-0 lg:border-t-[2px]  rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[55%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative  flex items-end bg-card"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white w-full text-center"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "提案",
    Icon: ReplyAll,
    imgSrc: "/frame-1.svg",
    description: "確認合作細節，提案時簽訂合約",
  },
  {
    id: 2,
    title: "討論",
    Icon: Handshake,
    imgSrc: "/frame-2.svg",
    description: "不限次數討論專屬內容和編排",
  },
  {
    id: 3,
    title: "技術",
    Icon: CodeXml,
    imgSrc: "/frame-3.svg",
    description: "進行技術實作，同步與客戶確認細節",
  },
  {
    id: 4,
    title: "交付",
    Icon: UserCheck,
    imgSrc: "/frame-4.svg",
    description: "交付最終成品，並負責後續指導使用",
  },
];
