import RaceList from "@/components/race-list";
import TopImage from "@/components/top-image";

export default function PastResults() {
  const raceResults2024 = [
    {
      name: "Race1",
      results: ["1st singles", "2nd doubles"],
    },
    {
      name: "Race2",
      results: ["1st singles", "2nd doubles"],
    },
    {
      name: "Race3",
      results: ["1st singles", "2nd doubles"],
    },
    {
      name: "Race4",
      results: ["1st singles", "2nd doubles"],
    },
    {
      name: "Race5",
      results: ["1st singles", "2nd doubles"],
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <TopImage title="Race Results" path="/team_relay.jpg" />

      {/* 2023/24 Race Results Card */}
      <div className="lg:w-[1100px] w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-[25px] m-5 lg:px-0 px-10">
        <div
          className={`flex flex-col justify-start items-start gap-5 w-full lg:order-first`}
        >
          <div className="text-black text-[32px] font-bold">
            2023/24 Season Race Results
          </div>
          <div className="w-full text-black text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio
            ligula, scelerisque sit amet mauris a, viverra sagittis libero.
            Fusce rhoncus metus tincidunt turpis condimentum consectetur.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Donec orci felis, luctus quis ligula non,
            vestibulum fermentum elit. Aenean eget erat a nulla luctus rhoncus.
            Sed maximus malesuada dolor, in tincidunt turpis faucibus ut. In
            lacinia egestas porta. Etiam et eleifend nibh, sit amet lobortis
            felis. Integer eleifend at justo sed lobortis. In at massa suscipit,
            fermentum mi non, finibus arcu. Doneelementum nunc eu turpis rhoncus
            venenatis. In vulputate tristique nisi ac dictum.
          </div>
        </div>
        <div className="lg:order-last drop-shadow-lg">
          <RaceList races={raceResults2024} />
        </div>
      </div>

      {/* 2022/23 Race Results Card */}
      <div className="lg:w-[1100px] w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-[25px] m-5 lg:px-0 px-10">
        <div
          className={`flex flex-col justify-start items-start gap-5 w-full lg:order-last`}
        >
          <div className="text-black text-[32px] font-bold">
            2022/23 Season Race Results
          </div>
          <div className="w-full text-black text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio
            ligula, scelerisque sit amet mauris a, viverra sagittis libero.
            Fusce rhoncus metus tincidunt turpis condimentum consectetur.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Donec orci felis, luctus quis ligula non,
            vestibulum fermentum elit. Aenean eget erat a nulla luctus rhoncus.
            Sed maximus malesuada dolor, in tincidunt turpis faucibus ut. In
            lacinia egestas porta. Etiam et eleifend nibh, sit amet lobortis
            felis. Integer eleifend at justo sed lobortis. In at massa suscipit,
            fermentum mi non, finibus arcu. Doneelementum nunc eu turpis rhoncus
            venenatis. In vulputate tristique nisi ac dictum.
          </div>
        </div>
        <div className="lg:order-first drop-shadow-lg">
          <RaceList races={raceResults2024} />
        </div>
      </div>

      {/* 2021/22 Race Results Card */}
      <div className="lg:w-[1100px] w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-[25px] m-5 lg:px-0 px-10">
        <div
          className={`flex flex-col justify-start items-start gap-5 w-full lg:order-first`}
        >
          <div className="text-black text-[32px] font-bold">
            2021/22 Season Race Results
          </div>
          <div className="w-full text-black text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio
            ligula, scelerisque sit amet mauris a, viverra sagittis libero.
            Fusce rhoncus metus tincidunt turpis condimentum consectetur.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Donec orci felis, luctus quis ligula non,
            vestibulum fermentum elit. Aenean eget erat a nulla luctus rhoncus.
            Sed maximus malesuada dolor, in tincidunt turpis faucibus ut. In
            lacinia egestas porta. Etiam et eleifend nibh, sit amet lobortis
            felis. Integer eleifend at justo sed lobortis. In at massa suscipit,
            fermentum mi non, finibus arcu. Doneelementum nunc eu turpis rhoncus
            venenatis. In vulputate tristique nisi ac dictum.
          </div>
        </div>
        <div className="lg:order-last drop-shadow-lg">
          <RaceList races={raceResults2024} />
        </div>
      </div>
    </div>
  );
}
