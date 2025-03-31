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
          I’m Embyr-Lee Susko — a Canadian luge athlete, business student, and
          proud mountain girl from Whistler, BC. I grew up playing every sport I
          could, but luge stuck. The speed, focus, and challenge had me hooked
          from the start. Since then, I’ve become a 16-time Canadian national
          champion across the Youth, Junior, and Senior categories. On the world
          stage, I placed 4th in Women’s Singles at the 2025 FIL World
          Championships — just 0.081 seconds off gold — and earned a silver
          medal in the U23 division. I also helped lead Team Canada to a bronze
          medal in the world championship team relay. Off the track, I’m
          studying commerce at the University of Calgary and building my path as
          an entrepreneur. I’m all about grit, good energy, and inspiring the
          next generation — especially young girls ready to go all in on sport,
          life, or whatever lights them up. Whether I’m sliding at 120 km/h or
          grinding through midterms, I show up with heart.
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
          Growing up in Whistler gave me the chance to play every sport I could
          get my hands on — from skiing and biking to soccer and hockey, I did
          it all. That active lifestyle built a strong foundation of grit,
          adaptability, and a drive to pursue excellence in whatever I loved.
          The moment I found luge, I knew it was the sport for me. The focus,
          precision, and thrill instantly clicked — and I’ve been chasing that
          feeling ever since. Today, I’m proud to represent Canada on the
          international stage, wearing the maple leaf with honour and heart. As
          a high-performance athlete, I bring relentless grit, passion, and
          presence to every run. But beyond the track, I care deeply about the
          environment that raised me. Sustainability, a deep connection to
          nature, and living with purpose are values I carry with me every step
          of the way.
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
          As a high-performance athlete and business student, I bring a unique
          combination of discipline, drive, and strategic thinking to everything
          I do. I’m a fresh, rising voice in Canadian sport — committed to
          excellence, growth, and making a meaningful impact. Raised in
          Whistler, I grew up immersed in sport and the outdoors, which shaped
          my deep values around sustainability, authenticity, and performance. I
          represent the next generation of athletes — grounded, ambitious, and
          ready to build strong, purpose-driven partnerships. If you&apos;re
          looking to align with an athlete who reflects your brand’s values and
          future focus, let’s connect.
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
