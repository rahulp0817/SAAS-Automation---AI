import React from "react";
import WorkflowButton from "./_components/WorkflowButton";
import Workflows from "./_components";

function page() {
  return (
    <div className="flex flex-col relative">
      <h1 className=" text-3xl font-semibold sticky top-0 z-[10] p-6 backdrop-blur-lg flex items-center justify-between">
        Workflows
        <WorkflowButton />
      </h1>
      <Workflows />
      <Workflows />
      <Workflows />
      <Workflows />
      <Workflows />
    </div>
  );
}

export default page;
