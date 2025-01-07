"use client";
import React, { useEffect } from "react";
import { Book, Headphones, Search } from "lucide-react";
import Templates from "../icons/cloud_download";
import { Input } from "@/components/ui/input";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {};

const InfoBar = (props: Props) => {
  return (
    <div className="flex flex-row justify-end gap-8 items-center px-12 py-4 w-full dark:bg-black border">
      <span className="flex items-center gap-2 font-bold"></span>
      <span className="flex items-center rounded-full bg-muted px-4 border shadow-sm gap-2">
        <Search />
        <Input
          placeholder="Quick Search"
          className="border-none bg-transparent"
        />
      </span>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent>
            <p>Guide</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default InfoBar;
