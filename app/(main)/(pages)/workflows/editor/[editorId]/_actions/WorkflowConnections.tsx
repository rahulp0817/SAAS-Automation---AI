"use server";

import React from "react";
import { db } from "@/lib/db";

export const onCreateNodeEdges = async (
  flowId: string,
  nodes: string,
  edges: string,
  flowPath: string
) => {
  const flow = await db.workflows.update({
    where: { id: flowId },
    data: {
      nodes,
      edges,
      flowPath: flowPath,
    },
  });

  if (flow) {
    return { message: "Flow saved successfully" };
  }
};

export const onFlowPublish = async (workflowId: string, state: boolean) => {
  const published = await db.workflows.update({
    where: { id: workflowId },
    data: {
      publish: state,
    },
  });

  if (published.publish) {
    return { message: "Flow published successfully" };
  }
  return { message: "Flow not published" };
};
