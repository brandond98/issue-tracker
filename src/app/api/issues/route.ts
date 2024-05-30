import { NextResponse } from "next/server";

import prisma from "../../../../lib/prisma";

export const GET = async () => {
  const issues = await prisma?.issue.findMany();

  const issuesResponse = {
    TODO: issues.filter((issue) => issue.status === "TODO"),
    IN_PROGRESS: issues.filter((issue) => issue.status === "IN_PROGRESS"),
    DONE: issues.filter((issue) => issue.status === "DONE"),
  };

  return NextResponse.json(issuesResponse);
};
