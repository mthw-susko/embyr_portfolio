import { Separator } from "./ui/separator";

export default function RaceCard({
  name,
  results,
}: {
  name: string;
  results: string[];
}) {
  return (
    <div className="flex flex-row w-full h-auto bg-purple-600 hover:bg-fuchsia-400 rounded-md p-5 ">
      <div className="text-4xl w-auto text-black text-white">{name}</div>
      <Separator orientation="vertical" className="mx-4" />
      <div className="w-full">
        {results.map((result, index) => (
          <div key={index} className="text-white">
            • {result}
          </div>
        ))}
      </div>
    </div>
  );
}
