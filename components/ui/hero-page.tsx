import { Instagram } from "lucide-react";
import { Button } from "./button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import FloatingPhone from "./floating-phone";
import Script from "next/script";
import Link from "next/link";

export default function HeroPage() {
  return (
    <section className="relative" id="hero_section">
      <div className="hidden lg:block absolute -left-60 -top-80 h-full w-96  bg-whitegridpaper2 rotate-45 bg-blend-lighten"></div>
      <div className="hidden lg:block absolute -left-80 -bottom-80 h-full w-96  bg-whitegridpaper2 -rotate-45 bg-blend-lighten"></div>
      <div className="container relative mx-auto flex flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 col-span-8">
        <a
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          href="https://rax-web2-0.vercel.app/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-blocks h-4 w-4"
          >
            <rect width="7" height="7" x="14" y="3" rx="1"></rect>
            <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
          </svg>{" "}
          <div
            data-orientation="vertical"
            role="none"
            className="shrink-0 bg-border w-[1px] mx-2 h-4"
          ></div>{" "}
          <span>教學課程</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="text-center text-7xl font-bold leading-tight tracking-tighter md:text-9xl lg:leading-[1.1]">
          Rax W
        </h1>
        <div className="flex gap-2">
          <h2>Rax Designs Your Web</h2>

          <blockquote className=" border-l-2 pl-2 italic ">
            <h2>更貼近年輕人的設計</h2>
          </blockquote>
        </div>
      </div>
      <div className="grid place-content-center p-12 pt-0">
        <FloatingPhone />
      </div>
      <div className="absolute right-5 bottom-3 hidden md:block">
        <Sooner />
      </div>
    </section>
  );
}

function Sooner() {
  return (
    <Card className="" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle>快速建立你的網頁</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          打造可靠性高,多種風格,高度SEO的網站
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        />
        <div
          className="elfsight-app-6e2f1f14-1507-44cc-846e-894e912f1b6c m-0 right-7"
          data-elfsight-app-lazy
        ></div>
        <Link href="#flow_section">
          <Button>合作方式</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
