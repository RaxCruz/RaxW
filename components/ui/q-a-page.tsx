import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
export default function QAPage() {
  return (
    <section className="container grid grid-cols-1  py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 gap-6">
      <div className="mx-auto flex gap-8 items-center mt-6">
        <Image
          src="/hat-avatar-small.png"
          height={75}
          width={75}
          className="rounded-full"
          alt="hat-avatar-small"
        />
        <blockquote className=" border-l-2 pl-4 italic">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Q & A
          </h1>
        </blockquote>
      </div>
      <AccordionDemo />
    </section>
  );
}
function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>可以客製化嗎？</AccordionTrigger>
        <AccordionContent className="text-gray-400">
          是的，所有元件皆可以客製化的哦
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>可以實體見面討論嗎？</AccordionTrigger>
        <AccordionContent className="text-gray-400">
          目前位於嘉義市，跨縣市可以進一步商討呦
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>如何聯絡呢？</AccordionTrigger>
        <AccordionContent className="text-gray-400">
          是的，可以透過右下角 messanger 進行聯絡
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="/hat-avatar.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
