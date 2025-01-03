import React from "react";

interface ChipsProps {
  name: string;
}

export default function Chips({ name }: ChipsProps) {
  return (
    <div className="border inline-block rounded-lg shadow-sm my-8">
      <span className="px-4 text-gray-500 font-normal ">{name}</span>
    </div>
  );
}
