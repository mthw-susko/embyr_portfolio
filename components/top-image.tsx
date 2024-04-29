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
          <p className="text-fuchsia-400 text-2xl font-bold">
            Luge Athlete / Student / Slayer{" "}
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
