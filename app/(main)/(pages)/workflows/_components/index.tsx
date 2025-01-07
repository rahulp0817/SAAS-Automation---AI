import React from "react";
import Workflow from "./Workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <Workflow
          name="Automation Workflow"
          description="Creating a worflow"
          id="123eyeu3748"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
