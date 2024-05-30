import { Ticket } from "@/components/ticket";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { IssueStatus } from "@prisma/client";

const getIssues = async () => {
  try {
    const issues = await fetch("http://localhost:3000/api/issues").then((res) =>
      res.json()
    );

    console.log({ issues });

    return issues;
  } catch (error) {
    console.error({ error });
  }
};

const statusOptions = [
  {
    value: IssueStatus.TODO,
    label: "TO DO",
  },
  {
    value: IssueStatus.IN_PROGRESS,
    label: "IN PROGRESS",
  },
  {
    value: IssueStatus.DONE,
    label: "DONE",
  },
];
export default async function Issues() {
  const { TODO, IN_PROGRESS, DONE } = await getIssues();

  return (
    <div>
      <Dialog>
        <div className="flex justify-end">
          <DialogTrigger asChild className="mb-5">
            <Button>Create Issue</Button>
          </DialogTrigger>
        </div>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Issue</DialogTitle>
            <DialogDescription>
              Describe the issue that you want to create.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="name">Title</Label>
              <Input
                id="name"
                placeholder="Enter a title"
                className="col-span-3 mt-2"
              />
            </div>
            <div>
              <Label htmlFor="username">Description</Label>
              <Textarea
                id="username"
                placeholder="Enter a description"
                className="col-span-3 mt-2"
              />
            </div>
            <div>
              <Label htmlFor="username">Status</Label>
              <Select>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="flex">
        <div className="w-1/3 border-r-2 p-3 min-h-screen">
          <h1 className="font-bold text-lg mb-5 uppercase">To do</h1>
          {TODO.map((issue: any) => (
            <Ticket issue={issue} key={issue.id} />
          ))}
        </div>
        <div className="w-1/3 border-r-2 p-3 min-h-screen">
          <h1 className="font-bold text-lg mb-5 uppercase">In Progress</h1>
          {IN_PROGRESS.map((issue: any) => (
            <Ticket issue={issue} key={issue.id} />
          ))}
        </div>
        <div className="w-1/3 border-r-2 p-3 min-h-screen">
          <h1 className="font-bold text-lg mb-5 uppercase">Done</h1>
          {DONE.map((issue: any) => (
            <Ticket issue={issue} key={issue.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
