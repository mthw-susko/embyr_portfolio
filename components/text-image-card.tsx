import Image from "next/image";

export default function TextImageCard({
  right = false,
  title,
  children,
  imgSrc,
}: {
  right?: boolean;
  title: string;
  children: React.ReactNode;
  imgSrc: string;
}) {
  // Apply dynamic ordering based on the 'right' prop but only for large screens
  const imageOrder = right ? "lg:order-last" : "lg:order-first";
  const contentOrder = right ? "lg:order-first" : "lg:order-last";

  return (
    <div className="lg:w-[1100px] w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-[25px] m-5 lg:px-0 px-10">
      <Image
        className={`lg:w-[525px] lg:h-[454px] w-auto h-auto rounded-lg drop-shadow-lg ${imageOrder}`}
        alt="image showcasing the section"
        style={{ objectFit: "cover" }}
        src={imgSrc}
        width={1000}
        height={454}
      />
      <div
        className={`flex flex-col justify-start items-start gap-5 w-full ${contentOrder}`}
      >
        <div className="text-black text-[32px] font-bold">{title}</div>
        {children}
      </div>
    </div>
  );
}
