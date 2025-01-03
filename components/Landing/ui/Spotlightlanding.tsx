import React from "react";
import { cn } from "@/lib/utils"
import { Spotlight } from "../../ui/Spotlight";
import { Buttonanimate } from "../ui/buttonanimate";
import { Badgetop } from "../ui/badgetop";

export function Spotlightlanding() {
  return (
    <>
      <div className="h-[48rem] w-full rounded-md flex md:items-center md:justify-center bg-white antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="purple"
        />
        <div className=" p-4 max-w-7xl mx-auto relative z-10 w-full pt-32 md:pt-0">
          <Badgetop />
          <h1 className="text-4xl md:text-7xl font-bold text-center ">
            Automate your
            <br />
            workflow seamlessly
          </h1>
          <p className="mt-4 font-medium text-base text-gray-600 max-w-lg text-center mx-auto">
            Effortlessly streamline workflows with our AI-powered automation
            platform. Connect tools, eliminate tasks, and boost productivity.
            {/* Automate your workflow seamlessly with our AI-powered automation tool.  */}
          </p>

          <Buttonanimate />
        </div>
      </div>
    </>
  );
}
