import { NextResponse } from "next/server";

import prisma from "../../../../lib/prisma";
import { Issue } from "@prisma/client";

export const GET = async () => {
  const issues = await prisma?.issue.findMany();

  const issuesResponse: Record<string, Issue[]> = {};

  for (const issue of issues) {
    if (issuesResponse[issue.status]) {
      issuesResponse[issue.status].push(issue);
    } else {
      issuesResponse[issue.status] = [issue];
    }
  }

  return NextResponse.json(issuesResponse);
};
