import Image from "next/image";

export default function PageFooter() {
  return (
    <div className="flex flex-col justify-center items-center bg-fuchsia-200 p-4">
      <div className="flex flex-row items-center space-x-3">
        <p className="font-bold">where to find me --</p>
        <a href="mailto:embyr@susko.ca">embyr@susko.ca</a>
        <a href="https://www.facebook.com/embyr.susko" target="_blank">
          <Image
            src={"/facebook.svg"}
            alt="Facebook logo"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/embyr-lee-susko-55aa1b248/"
          target="_blank"
        >
          <Image
            src={"/linkedIn.svg"}
            alt="linkedIn logo"
            width={30}
            height={30}
          />
        </a>
        <a href="https://www.instagram.com/embyr.lee.susko/" target="_blank">
          <Image
            src={"/instagram.svg"}
            alt="Instagram logo"
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
}
