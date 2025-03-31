export type RaceResult = {
  text: string;
  medal?: "none" | "gold" | "silver" | "bronze" | "highlight";
};

export type Race = {
  name: string;
  results: RaceResult[];
};
