import TextImageCard from "@/components/text-image-card";
import TopImage from "@/components/top-image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <TopImage
        title="Embyr Susko"
        subtitle="student / athelete / slayer"
        path="/taking_off_visor.JPG"
        small={false}
      />
      {/* first card */}
      <TextImageCard title="About Me" imgSrc="/outrun_celebration.jpg" right>
        <div className="w-full text-black text-xl font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio
          ligula, scelerisque sit amet mauris a, viverra sagittis libero. Fusce
          rhoncus metus tincidunt turpis condimentum consectetur. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Donec orci felis, luctus quis ligula non, vestibulum fermentum
          elit. Aenean eget erat a nulla luctus rhoncus. Sed maximus malesuada
          dolor, in tincidunt turpis faucibus ut. In lacinia egestas porta.
          Etiam et eleifend nibh, sit amet lobortis felis. Integer eleifend at
          justo sed lobortis. In at massa suscipit, fermentum mi non, finibus
          arcu. Doneelementum nunc eu turpis rhoncus venenatis. In vulputate
          tristique nisi ac dictum.
        </div>
        <div className="justify-end items-start gap-5 inline-flex drop-shadow-lg">
          <a href="/skills-&-values">
            <Button className="bg-purple-600 hover:bg-fuchsia-400">
              Skills & Values
            </Button>
          </a>
        </div>
      </TextImageCard>

      {/* second card */}
      <TextImageCard title="Luge // My Sport" imgSrc="/on_track.JPG">
        <div className="w-full text-black text-xl font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio
          ligula, scelerisque sit amet mauris a, viverra sagittis libero. Fusce
          rhoncus metus tincidunt turpis condimentum consectetur. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Donec orci felis, luctus quis ligula non, vestibulum fermentum
          elit. Aenean eget erat a nulla luctus rhoncus. Sed maximus malesuada
          dolor, in tincidunt turpis faucibus ut. In lacinia egestas porta.
          Etiam et eleifend nibh, sit amet lobortis felis. Integer eleifend at
          justo sed lobortis. In at massa suscipit, fermentum mi non, finibus
          arcu. Doneelementum nunc eu turpis rhoncus venenatis. In vulputate
          tristique nisi ac dictum.
        </div>
        <div className="justify-end items-start gap-5 inline-flex drop-shadow-lg">
          <a href="/past-results">
            <Button className="bg-purple-600 hover:bg-fuchsia-400">
              Past Results
            </Button>
          </a>
          <a href="/goals">
            <Button className="bg-purple-600 hover:bg-fuchsia-400">
              My Goals
            </Button>
          </a>
        </div>
      </TextImageCard>

      {/* third card */}
      <TextImageCard title="Why Choose Me?" imgSrc="/warmup.jpg" right>
        <div className="w-full text-black text-xl font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio
          ligula, scelerisque sit amet mauris a, viverra sagittis libero. Fusce
          rhoncus metus tincidunt turpis condimentum consectetur. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Donec orci felis, luctus quis ligula non, vestibulum fermentum
          elit. Aenean eget erat a nulla luctus rhoncus. Sed maximus malesuada
          dolor, in tincidunt turpis faucibus ut. In lacinia egestas porta.
          Etiam et eleifend nibh, sit amet lobortis felis. Integer eleifend at
          justo sed lobortis. In at massa suscipit, fermentum mi non, finibus
          arcu. Doneelementum nunc eu turpis rhoncus venenatis. In vulputate
          tristique nisi ac dictum.
        </div>
        <div className="justify-end items-start gap-5 inline-flex drop-shadow-lg">
          <a href="mailto:embyr@susko.ca">
            <Button className="bg-purple-600 hover:bg-fuchsia-400">
              Work With Me
            </Button>
          </a>
        </div>
      </TextImageCard>
    </main>
  );
}
