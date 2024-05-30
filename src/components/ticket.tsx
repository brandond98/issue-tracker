import { Badge } from "./ui/badge";
import { Issue } from "@prisma/client";

export const Ticket = ({ issue }: { issue: Issue }) => {
  return (
    <div
      key={issue.id}
      className="shadow-lg p-3 border-2 relative cursor-pointer"
      draggable
    >
      <Badge className="absolute top-2 right-2 bg-amber-600">Medium</Badge>
      <p className="font-bold">{issue.title}</p>
      <p className="mt-3">{issue.description}</p>
    </div>
  );
};
