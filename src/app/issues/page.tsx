import { Button } from "@/components/ui/button";

const getIssues = async () => {
  try {
    const issues = await fetch("http://localhost:3000/api/issues").then((res) =>
      res.json()
    );

    return issues;
  } catch (error) {
    console.error({ error });
  }
};
export default async function Issues() {
  const { issues } = await getIssues();

  return (
    <div>
      <Button className="mb-5 text-right">Create Issue</Button>
      <div className="flex">
        <div className="w-1/3 border-r-2 p-3 h-screen">
          <h1 className="font-bold text-lg mb-5">Todo</h1>
          {issues?.map((issue: any) => (
            <div key={issue.id} className="shadow-lg p-3 border-2">
              <p className="font-bold">{issue.title}</p>
              <p className="mt-3">{issue.description}</p>
            </div>
          ))}
        </div>
        <div className="w-1/3 border-r-2 p-3 h-screen">
          <h1 className="font-bold text-lg mb-5">In Progress</h1>
          {issues?.map((issue: any) => (
            <div key={issue.id} className="shadow-lg p-3 border-2">
              <p className="font-bold">{issue.title}</p>
              <p className="mt-3">{issue.description}</p>
            </div>
          ))}
        </div>
        <div className="w-1/3 border-r-2 p-3 h-screen">
          <h1 className="font-bold text-lg mb-5">Done</h1>
          {issues?.map((issue: any) => (
            <div key={issue.id} className="shadow-lg p-3 border-2">
              <p className="font-bold">{issue.title}</p>
              <p className="mt-3">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
