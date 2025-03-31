import TopImage from "@/components/top-image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Goals() {
  const goals = [
    { number: "1.", desc: "Stand on a World Cup podium for the first time" },
    {
      number: "2.",
      desc: "Consistently finish in the Top 12–15 on the World Cup circuit",
    },
    { number: "3.", desc: "Compete in the 2026 Winter Olympic Games" },
  ];

  return (
    <div className="flex flex-col items-center">
      <TopImage title="My Goals" path="/snow_finish.JPG" />
      {/* Top Three Goals Card*/}
      <div className="lg:w-[1100px] w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-[25px] m-5 lg:px-0 px-10">
        <div
          className={`flex flex-col justify-start items-start gap-5 w-full lg:order-first`}
        >
          <div className="text-black text-[32px] font-bold">
            2024/25 Season Goals
          </div>
          <div className="w-full text-black text-xl font-normal">
            I believe that success doesn’t happen by accident — it comes from
            setting clear goals, writing them down, and building a plan to get
            there. That mindset has guided me through every stage of my athletic
            and personal journey, and it’s something I live by both on and off
            the track.
          </div>
        </div>
        <div className="lg:order-last drop-shadow-lg">
          <div className="lg:h-[400px] h-auto lg:w-[500px] w-auto rounded-md gap-4 overflow-auto drop-shadow-sm">
            <div className="flex flex-col h-max space-y-3 p-2 ">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="flex flex-row w-full h-auto bg-purple-600 hover:bg-fuchsia-400 rounded-md p-5 items-center justify-center gap-4"
                >
                  <div className="text-4xl w-auto text-white">
                    {goal.number}
                  </div>
                  <div className="w-full">
                    <div className="text-white text-xl">{goal.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* BHAG and 3HAG Card */}
      <div className="lg:w-[1100px] w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-[25px] m-5 lg:px-0 px-10">
        <div className="lg:order-last drop-shadow-lg">
          <div className="w-auto rounded-md gap-4 overflow-auto drop-shadow-sm">
            <Card className="bg-fuchsia-200">
              <CardHeader>
                <CardTitle className="text-[32px]">3HAG</CardTitle>
                <CardDescription className="text-lg">
                  (3-Year Highly Achievable Goal)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="w-full text-black text-xl font-normal">
                  My 3HAG is to win a top-three overall Crystal Globe. It’s a
                  big goal that pushes me to stay consistent, focused, and
                  all-in, every single season. I’m not just chasing one great
                  run — I’m building toward becoming one of the best in the
                  world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="lg:order-last drop-shadow-lg">
          <div className=" w-auto rounded-md gap-4 overflow-auto drop-shadow-sm">
            <Card className="bg-fuchsia-200">
              <CardHeader>
                <CardTitle className="text-[32px]">BHAG</CardTitle>
                <CardDescription className="text-lg">
                  (Big Hary Audacious Goal)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="w-full text-black text-xl font-normal">
                  My BHAG is to stand on top of the Olympic podium and bring
                  home gold. It’s the ultimate achievement in my sport and the
                  vision that’s been in the back of my mind since the very
                  beginning. It keeps me grounded in the “why” behind every
                  lift, every run, and every choice I make as an athlete.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
