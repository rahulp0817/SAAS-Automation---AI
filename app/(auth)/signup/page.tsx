"use client";
import React from 'react';
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  return (
    <div className='px-24 mt-4'>
      <div 
        className='items-center gap-1 px-3 py-2 cursor-pointer flex w-fit hover:text-blue-500 text-sm font-medium'
        onClick={() => router.push("/")}
      >
        <ArrowLeftIcon />
        Home
      </div>
      {/* Main signup screen*/}
      
    </div>
  )
}

export default Page;
