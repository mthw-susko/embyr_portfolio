import { ScrollArea } from "@/components/ui/scroll-area";
import RaceCard from "./race-card";

export default function RaceList({
  races,
}: {
  races: { name: string; results: string[] }[];
}) {
  return (
    <ScrollArea className="h-[400px] lg:w-[500px] w-auto rounded-md border gap-4 overflow-auto drop-shadow-sm">
      <div className="flex flex-col h-max space-y-2 p-2 ">
        {races.map((race, index) => (
          <RaceCard key={index} name={race.name} results={race.results} />
        ))}
      </div>
    </ScrollArea>
  );
}
