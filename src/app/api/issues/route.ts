import { NextResponse } from "next/server";

import prisma from "../../../../lib/prisma";

export const GET = async () => {
  const issues = await prisma?.issue.findMany();

  return NextResponse.json(issues);
};
