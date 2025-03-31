import RaceList from "@/components/race-list";
import TopImage from "@/components/top-image";
import { Race } from "@/types/race";

export default function PastResults() {
  const raceResults2025: Race[] = [
    {
      name: "FIL World Championships (Whistler, CAN - Feb 2025)",
      results: [
        { text: "Silver – U23 Women's Singles", medal: "silver" },
        { text: "Bronze – Team Relay", medal: "bronze" },
        { text: "4th Place – Women's Singles", medal: "highlight" },
      ],
    },
    {
      name: "Canadian Championships (Whistler, CAN - Jan 2025)",
      results: [
        { text: "Gold – Senior Women's Singles", medal: "gold" },
        { text: "Gold – Junior Women's Singles", medal: "gold" },
      ],
    },
    {
      name: "Junior World Cup (Winterberg, GER - Dec 2024)",
      results: [{ text: "3rd Place – Women's Singles", medal: "bronze" }],
    },
    {
      name: "Junior World Cup (La Plagne, FRA - Dec 2024)",
      results: [{ text: "3rd Place – Women's Singles", medal: "bronze" }],
    },
  ];

  const raceResults2024: Race[] = [
    {
      name: "Junior World Championships (Lillehammer, NOR - Feb 2024)",
      results: [{ text: "Silver – Women's Singles", medal: "silver" }],
    },
    {
      name: "Junior World Cup (Whistler, CAN - Dec 2023)",
      results: [{ text: "1st Place – Women's Singles", medal: "gold" }],
    },
    {
      name: "Junior World Cup (Park City, USA - Dec 2023)",
      results: [
        { text: "1st Place – Women's Singles (Dec 3)", medal: "gold" },
        { text: "1st Place – Women's Singles (Dec 1)", medal: "gold" },
      ],
    },
    {
      name: "Junior World Cup Standings",
      results: [{ text: "2nd Overall – Women's Singles", medal: "silver" }],
    },
    {
      name: "Canadian Championships (Whistler, CAN - Jan 2024)",
      results: [
        { text: "Gold – Junior Women's Singles", medal: "gold" },
        { text: "Gold – Senior Women's Singles", medal: "gold" },
      ],
    },
  ];

  const raceResults2023: Race[] = [
    {
      name: "Canadian Championships (Whistler, CAN - Jan 2023)",
      results: [
        { text: "Gold – Youth Women's Singles", medal: "gold" },
        { text: "Gold – Junior Women's Singles", medal: "gold" },
        { text: "Gold – Senior Women's Singles", medal: "gold" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50">
      <TopImage title="Race Results" path="/team_relay.jpg" />

      {/* 2024/25 Race Results Card */}
      <div className="lg:w-[1100px] w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-[25px] m-5 lg:px-5 px-10 bg-white rounded-xl shadow-lg p-6">
        <div
          className={`flex flex-col justify-start items-start gap-5 w-full lg:order-last`}
        >
          <div className="text-black text-[32px] font-bold">
            2024/25 Season Race Results
          </div>
          <div className="w-full text-black text-lg font-normal">
            <p className="mb-4">
              An outstanding season with multiple podium finishes at World
              Championships and World Cup events.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Double gold at Canadian Championships</li>
              <li>Bronze in Team Relay at World Championships</li>
              <li>Consistent top-3 finishes in Junior World Cup</li>
            </ul>
          </div>
        </div>
        <div className="lg:order-first w-full">
          <RaceList races={raceResults2025} />
        </div>
      </div>

      {/* 2023/24 Race Results Card */}
      <div className="lg:w-[1100px] w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-[25px] m-5 lg:px-5 px-10 bg-white rounded-xl shadow-lg p-6">
        <div
          className={`flex flex-col justify-start items-start gap-5 w-full lg:order-first`}
        >
          <div className="text-black text-[32px] font-bold">
            2023/24 Season Race Results
          </div>
          <div className="w-full text-black text-lg font-normal">
            <p className="mb-4">
              A dominant season in junior competition with multiple World Cup
              victories.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Three Junior World Cup gold medals</li>
              <li>Silver at Junior World Championships</li>
              <li>Double gold at Canadian Championships</li>
            </ul>
          </div>
        </div>
        <div className="lg:order-last w-full">
          <RaceList races={raceResults2024} />
        </div>
      </div>

      {/* 2022/23 Race Results Card */}
      <div className="lg:w-[1100px] w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-[25px] m-5 lg:px-5 px-10 bg-white rounded-xl shadow-lg p-6">
        <div
          className={`flex flex-col justify-start items-start gap-5 w-full lg:order-last`}
        >
          <div className="text-black text-[32px] font-bold">
            2022/23 Season Race Results
          </div>
          <div className="w-full text-black text-lg font-normal">
            <p className="mb-4">
              A clean sweep at the Canadian Championships across all age
              categories.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gold in Youth, Junior, and Senior divisions</li>
              <li>Demonstrated versatility across age groups</li>
              <li>Established dominance in national competition</li>
            </ul>
          </div>
        </div>
        <div className="lg:order-first w-full">
          <RaceList races={raceResults2023} />
        </div>
      </div>

      {/* Additional Results Link */}
      <div className="lg:w-[1100px] w-full text-center mt-8 mb-12 p-6 bg-purple-50 rounded-xl border border-purple-200 shadow-sm">
        <h3 className="text-2xl font-bold text-purple-800 mb-4">
          View All My Results
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          You can find all my past results at the link below!
        </p>
        <a
          href="https://www.luge.ca/en/team/?id=106"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          View My Results!
        </a>
      </div>
    </div>
  );
}
