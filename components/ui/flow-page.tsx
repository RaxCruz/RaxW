import { Checkbox } from "@/components/ui/checkbox";
import CustomKanban from "./todo-list";
import VerticalAccordion from "./vertical-accodion";
import NewsPage from "./news-page";
import { Badge } from "./badge";
import Image from "next/image";
import Reveal from "./reveal";
export default function FlowPage() {
  return (
    <section className="container grid grid-cols-1  py-8 md:py-12 md:pb-8 lg:py-20 lg:pb-20 gap-8">
      <div className="">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 flex items-center gap-2">
          專屬行程
          <Badge className="text-center">特色</Badge>
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          每個
          <a
            href="https://www.managertoday.com.tw/articles/view/53570?"
            className="font-medium text-primary underline underline-offset-4"
            target="_blank"
          >
            專案
          </a>
          建立獨一流程控制,更能了解專案進度
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          「讓客戶與你知道下一步該做什麼」— Rax
        </blockquote>
      </div>
      <CustomKanban />
      <Reveal>
        <div className="mt-20" id="flow_section">
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 flex items-center gap-2">
            合作方式
            <Badge className="text-center">RaxW</Badge>
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            確認合作到交付使用,過程透明且流程清晰
          </p>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            「專案的成功，建立在彼此的信賴」— Rax
          </blockquote>
        </div>
      </Reveal>
      <NewsPage />
      <VerticalAccordion />
    </section>
  );
}

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2 py-8">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
