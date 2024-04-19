import BeforeAfterPage from "@/components/ui/before-after-page";
import ComparePage from "@/components/ui/compare-page";
import ContentPage from "@/components/ui/content-page";
import PhoneSection from "@/components/ui/floating-phone";
import FloatingPhone from "@/components/ui/floating-phone";
import FlowPage from "@/components/ui/flow-page";
import Footer from "@/components/ui/footer";
import FuzzyOverlayHero from "@/components/ui/fuzzle-hero";
import HeroPage from "@/components/ui/hero-page";
import HoverImageLinks from "@/components/ui/hover-image-link";
import ImageTrail from "@/components/ui/image-trail";
import IntroPage from "@/components/ui/intro-page";
import NavBarTop from "@/components/ui/navbar-top";
import NewsPage from "@/components/ui/news-page";
import QAPage from "@/components/ui/q-a-page";
import Reveal from "@/components/ui/reveal";
import RevealSole from "@/components/ui/reveal_sole";
import { Separator } from "@/components/ui/separator";
import StickyScrollRevealPage from "@/components/ui/sticky-scoll-section";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import CustomKanban from "@/components/ui/todo-list";
import VerticalAccordion from "@/components/ui/vertical-accodion";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <main className=" min-h-screen  relative max-w-full ">
      <Reveal>
        <NavBarTop />
      </Reveal>
      <Reveal>
        <HeroPage />
      </Reveal>

      <FuzzyOverlayHero />

      <Reveal>
        <ComparePage />
      </Reveal>
      <Reveal>
        <BeforeAfterPage />
      </Reveal>
      <Reveal>
        <FlowPage />
      </Reveal>
      <Reveal>
        <QAPage />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}
