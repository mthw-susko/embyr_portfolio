import { ScrollArea } from "@/components/ui/scroll-area";
import RaceCard from "./race-card";

type RaceResult = {
  text: string;
  medal?: "none" | "gold" | "silver" | "bronze" | "highlight";
};

export default function RaceList({
  races,
}: {
  races: { name: string; results: RaceResult[] }[];
}) {
  return (
    <ScrollArea className="h-[400px] lg:w-[500px] w-auto rounded-md border gap-4 overflow-auto drop-shadow-sm bg-gradient-to-b from-purple-50/20 to-white">
      <div className="flex flex-col h-max space-y-4 p-4">
        {races.map((race, index) => (
          <RaceCard key={index} name={race.name} results={race.results} />
        ))}
      </div>
    </ScrollArea>
  );
}
