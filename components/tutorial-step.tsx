"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import "reactflow/dist/style.css";
import Header from "./header";

export const dynamic = "force-dynamic";

type Props = {
  children: React.ReactNode;
  nextPageUrl: string | null;
  prevPageUrl: string | null;
  title?: string;
  flow: React.ReactNode;
};

export function TutorialStep({
  children,
  nextPageUrl,
  prevPageUrl,
  flow,
  title,
}: Props) {
  return (
    <div className="min-h-screen max-h-screen h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      <div className="w-full h-fit px-2 py-2 flex items-center bg-red-300 dark:bg-red-900 text-red-900 dark:text-red-100 text-center justify-center text-sm">
        This document is still being written. Only for reading purpose...for
        now.
      </div>

      <main className="p-4 h-full max-h-full flex-grow w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-2 md:px-10">
        <Card className="w-full h-full max-h-full col-span-2 mx-auto pb-0 bg-white dark:bg-gray-800">
          <CardHeader className="prose dark:prose-invert">
            <h2 className="p-0 m-0 text-gray-900 dark:text-gray-100">{title}</h2>
          </CardHeader>
          <CardContent className="overflow-y-auto h-[calc(100vh-10rem)]">
            <ScrollArea className="h-[calc(100vh-20rem)]">
              <article className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                {children}
              </article>
            </ScrollArea>
          </CardContent>
          <CardFooter className="grid grid-cols-3 gap-2 w-full pt-0 md:pt-4 sticky bottom-0 bg-white dark:bg-gray-800">
            {prevPageUrl ? (
              <Button className="w-fit" asChild>
                <Link href={prevPageUrl}>Previous</Link>
              </Button>
            ) : (
              <div></div>
            )}

            <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
              Scroll to bottom
            </p>

            <div className="flex justify-end">
              {nextPageUrl ? (
                <Button asChild className="w-fit">
                  <Link href={nextPageUrl}>Next Step</Link>
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          </CardFooter>
        </Card>

        {/* react flow here */}
        <div className="w-full mx-auto max-w-full h-full min-h-[300px] p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          {flow}
        </div>
      </main>
    </div>
  );
}

export default TutorialStep;