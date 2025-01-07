import React from "react";
import { ConnectionTypes } from "@/lib/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  type: ConnectionTypes;
  icon: string;
  title: ConnectionTypes;
  description: string;
  callback?: () => void;
  connected: {} & any;
};

const ConnectionCard = ({
  description,
  type,
  title,
  icon,
  connected,
}: Props) => {
  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-0">
        <div>
          <Image
            src={icon}
            alt={title}
            height={40}
            width={40}
            className="object-contain mb-4"
          />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4">
        <Link
          href={
            title === "Discord"
              ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT || "#"
              : title === "Notion"
              ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL || "#"
              : title === "Slack"
              ? process.env.NEXT_PUBLIC_SLACK_REDIRECT || "#"
              : "#"
          }
          className="rounded-lg bg-black px-4 py-2 font-semibold text-white"
        >
          Connect
        </Link>
      </div>
    </Card>
  );
};

export default ConnectionCard;
