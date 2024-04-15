import { Badge } from "lucide-react";
import { CarouselDemo } from "./caroulsel-demo";
import Image from "next/image";
export default function BeforeAfterPage() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 gap-8 relative">
      <div className="">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          組件式設計: 更彈性規劃佈局
        </h1>
        <CheckboxDemo />
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 flex items-center relative">
          <Badge></Badge>設計概念
          <Image
            src="/rax-peep.svg"
            width={80}
            height={102}
            alt="rax-image"
            className="absolute right-0 -bottom-3"
          />
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          規劃符合品牌形象的
          <a
            href="https://www.shutterstock.com/zh-Hant/blog/complete-guide-color-in-design"
            target="_blank"
            className="font-medium text-primary underline underline-offset-4"
          >
            調性
          </a>
          ,同時依照調性設計獨一無二的組件.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          「對的設計，能夠永續」—馬西莫．維涅里
        </blockquote>
      </div>
      <div className="mx-auto my-auto">
        <CarouselDemo />
      </div>
    </section>
  );
}

import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2 py-8">
      <Checkbox id="terms" checked />
      <label
        htmlFor="terms"
        className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        可微調單一組件
      </label>
      <Checkbox id="terms" checked />
      <label
        htmlFor="terms"
        className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        更靈活的設計
      </label>
    </div>
  );
}
