// Updated RaceCard component
import { Separator } from "./ui/separator";
type RaceResult = {
  text: string;
  medal?: "none" | "gold" | "silver" | "bronze" | "highlight";
};

const medalStyles = {
  gold: {
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-50",
    text: "text-yellow-800",
    icon: "🥇",
    bullet: "text-yellow-500",
  },
  silver: {
    bg: "bg-gradient-to-r from-gray-100 to-gray-50",
    text: "text-gray-800",
    icon: "🥈",
    bullet: "text-gray-400",
  },
  bronze: {
    bg: "bg-gradient-to-r from-amber-100 to-amber-50",
    text: "text-amber-800",
    icon: "🥉",
    bullet: "text-amber-600",
  },
  none: {
    bg: "",
    text: "text-white",
    icon: "",
    bullet: "text-purple-200",
  },
  highlight: {
    bg: "bg-gradient-to-r from-purple-100 to-fuchsia-50",
    text: "text-purple-900 font-bold",
    icon: "🌟",
    bullet: "text-fuchsia-400",
  },
};

export default function RaceCard({
  name,
  results,
}: {
  name: string;
  results: RaceResult[];
}) {
  return (
    <div className="flex flex-row h-auto bg-purple-600 hover:bg-purple-500 rounded-lg p-4 transition-all duration-200 shadow-md">
      <div className="text-lg w-full text-white font-bold pr-3">{name}</div>
      <Separator orientation="vertical" className="mx-3 bg-purple-400" />
      <div className="w-full space-y-2">
        {results.map((result, index) => {
          const isWorlds4th =
            result.text.includes("4th Place") &&
            result.text.includes("World Championships");
          const style = isWorlds4th
            ? medalStyles.highlight
            : medalStyles[result.medal || "none"];

          return (
            <div
              key={index}
              className={`flex items-start ${style.bg} rounded px-2 py-1 ${style.text} ${isWorlds4th ? "border-l-4 border-fuchsia-500" : ""}`}
            >
              <span
                className={`mr-2 text-lg ${isWorlds4th ? "animate-pulse" : ""}`}
              >
                {style.icon || "•"}
              </span>
              <span
                className={result.medal || isWorlds4th ? "font-medium" : ""}
              >
                {result.text}
                {isWorlds4th && (
                  <span className="ml-2 text-xs bg-fuchsia-100 text-fuchsia-800 px-2 py-0.5 rounded-full">
                    Top 4 in the World!
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
