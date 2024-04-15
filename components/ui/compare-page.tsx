import { CarouselDemo } from "./caroulsel-demo";

export default function ComparePage() {
  return (
    <section className="container grid grid-cols-1  py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 gap-8">
      <div className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          骨骼式排版: 強化使用者體驗
        </h1>

        <Badge className="mt-5">Demo</Badge>
      </div>
      <TabsDemo />
    </section>
  );
}

import { Checkbox } from "@/components/ui/checkbox";

function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2 py-8">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
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

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CardWithForm() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "./skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full md:w-[80%] mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Before</TabsTrigger>
        <TabsTrigger value="password">After</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <div className="flex gap-4">
              <Skeleton className="h-12 w-12 rounded-full flex-shrink-0 bg-gray-200" />
              <div className="space-y-2 w-full ">
                <Skeleton className="h-6 w-20" />

                <Skeleton className="h-4 w-[60%]" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-8 w-full " />
            </div>
            <div className="space-y-1">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-8 w-full" />
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-20 " />
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>After</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
