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
    { number: "1.", desc: "this is the goal description" },
    { number: "2.", desc: "this is the goal description" },
    { number: "3.", desc: "this is the goal description" },
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
          <div className="lg:h-[400px] h-auto lg:w-[500px] w-auto rounded-md gap-4 overflow-auto drop-shadow-sm">
            <div className="flex flex-col h-max space-y-5 p-2 ">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="flex flex-row w-full h-auto bg-purple-400 hover:bg-purple-500 rounded-md p-9 items-center justify-center gap-4"
                >
                  <div className="text-4xl w-auto text-black text-white">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  odio ligula, scelerisque sit amet mauris a, viverra sagittis
                  libero. Fusce rhoncus metus tincidunt turpis condimentum
                  consectetur. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia curae; Donec orci felis,
                  luctus quis ligula non, vestibulum fermentum elit. Aenean eget
                  erat a nulla luctus rhoncus. Sed maximus malesuada dolor, in
                  tincidunt turpis faucibus ut. In lacinia egestas porta. Etiam
                  et eleifend nibh, sit amet lobortis felis. Integer eleifend at
                  justo sed lobortis. In at massa suscipit, fermentum mi non,
                  finibus arcu. Doneelementum nunc eu turpis rhoncus venenatis.
                  In vulputate tristique nisi ac dictum.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  odio ligula, scelerisque sit amet mauris a, viverra sagittis
                  libero. Fusce rhoncus metus tincidunt turpis condimentum
                  consectetur. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia curae; Donec orci felis,
                  luctus quis ligula non, vestibulum fermentum elit. Aenean eget
                  erat a nulla luctus rhoncus. Sed maximus malesuada dolor, in
                  tincidunt turpis faucibus ut. In lacinia egestas porta. Etiam
                  et eleifend nibh, sit amet lobortis felis. Integer eleifend at
                  justo sed lobortis. In at massa suscipit, fermentum mi non,
                  finibus arcu. Doneelementum nunc eu turpis rhoncus venenatis.
                  In vulputate tristique nisi ac dictum.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
