import React from "react";
import { CONNECTIONS } from "@/lib/constant";
import ConnectionCard from "./_components/ConnectionCard";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between p-6 text-2xl backdrop-blur-lg">
        <span>Connections</span>
      </h1>
      <div className=" relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6">
          <p className="text-base text-gray-500">
            Connect all your apps directly from here You may need to connect
            these apps regularly to refresh verification
          </p>
          {CONNECTIONS.map((connection) => (
            <ConnectionCard
              key={connection.title}
              description={connection.description}
              title={connection.title}
              icon={connection.image}
              type={connection.title}
              connected={{}} // Added empty object to satisfy the required prop
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default page;
