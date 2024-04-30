import { Badge } from "./ui/badge";

export default function TopImage({
  path,
  title,
  subtitle = "",
  small = true,
}: {
  path: string;
  title: string;
  subtitle?: string;
  small?: boolean;
}) {
  return (
    <div
      className={`relative ${small ? "h-[400px]" : "h-[600px]"} relative text-white flex items-center w-screen`}
      style={{
        backgroundImage: `url(${path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:pl-20 p-5 space-y-4">
        <h1 className="text-7xl font-bold drop-shadow-2xl">{title}</h1>
        {subtitle != "" ? (
          <Badge className="bg-fuchsia-400 text-lg hover:bg-fuchsia-400">
            Student / Athlete / Slayer
          </Badge>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
