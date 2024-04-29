import TextImageCard from "@/components/text-image-card";
import TopImage from "@/components/top-image";

export default function SkillsAndValues() {
  return (
    <div className="flex flex-col items-center">
      <TopImage title="Skills and Values" path="/carrying_sled.jpeg" />
      {/* first card */}
      <TextImageCard title="Life / Social Skills" imgSrc="/chilln.jpeg">
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
      </TextImageCard>
      {/* second card */}
      <TextImageCard
        title="Academic / Career Skills"
        imgSrc="/start_handles.jpg"
        right
      >
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
      </TextImageCard>
      {/* third card */}
      <TextImageCard title="Core Values" imgSrc="/thumbs_up.jpg">
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
      </TextImageCard>
    </div>
  );
}
