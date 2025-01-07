import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

type Props = {
  name: string;
  description: string;
  id: string;
  publish: boolean | null;
};

const Workflow = ({ name, description, id, publish }: Props) => {
  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-4">
        <Link href={`/workflows/editor/${id}`}>
          <div className="flex flex-row gap-4">
            <Image
              src="/googleDrive.png"
              alt="Google Drive"
              height={40}
              width={40}
              className="object-contain mb-2"
            />
            <Image
              src="/notion.png"
              alt="Notion"
              height={40}
              width={40}
              className="object-contain mb-2"
            />
            <Image
              src="/discord.png"
              alt="Discord"
              height={40}
              width={40}
              className="object-contain mb-2"
            />
          </div>
          <div className="mt-2">
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </Link>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4">
        <Switch
          id="switch-container"
          // onClick={onPublishFlow}
          // defultChecked={publish}
        ></Switch>
      </div>
    </Card>
  );
};

export default Workflow;
