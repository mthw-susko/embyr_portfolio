import TextImageCard from "@/components/text-image-card";
import TopImage from "@/components/top-image";

export default function SkillsAndValues() {
  return (
    <div className="flex flex-col items-center">
      <TopImage title="Skills and Values" path="/carrying_sled.jpeg" />
      {/* first card */}
      <TextImageCard
        title="Academic / Career Skills"
        imgSrc="/start_handles.jpg"
        right
      >
        <div className="w-full text-black text-xl font-normal">
          I’m currently studying at the Haskayne School of Business at the
          University of Calgary, working toward my Bachelor of Commerce. I’ve
          always had a passion for entrepreneurship — throughout my life, I’ve
          started and run several small businesses, which sparked my interest in
          building and growing something from the ground up. Alongside my
          studies and athletic career, I’ve also worked in restaurants and
          customer service roles, developing strong communication, adaptability,
          and leadership skills. Balancing high-performance sport, academics,
          and work has taught me how to manage pressure, stay focused, and keep
          moving forward with purpose.
        </div>
      </TextImageCard>
      {/* second card */}
      <TextImageCard title="Core Values" imgSrc="/thumbs_up.jpg">
        <div className="w-full text-black text-xl font-normal">
          I lead with hard work, authenticity, and purpose — values shaped by
          growing up in the mountains and competing at the highest level of
          sport. I care deeply about the environment, community, and pushing
          past limits with resilience and grit. I’m especially passionate about
          inspiring the next generation of athletes, particularly young girls,
          to believe in themselves and go after bold goals. Whether on the track
          or in life, I aim to lead by example and create space for others to
          rise.
        </div>
      </TextImageCard>
    </div>
  );
}
