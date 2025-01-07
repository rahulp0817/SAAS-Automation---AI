import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-gray-50 p-6 text-2xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-xl font-semibold">User profile</h2>
          <p className="text-base text-gray-400">Add or upadate your Information</p>
        </div>
      </div>
    </div>
  );
}
