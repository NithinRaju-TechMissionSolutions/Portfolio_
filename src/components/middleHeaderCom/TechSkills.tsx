export default function TechList({ img, i }: { img: string; i: number }) {
  return (
    <section className="p-1">
      <img
        className="w-72 p-2 hover:scale-110 duration-300 border-2 rounded-xl hover:border-gray-500 animate-pulse hover:animate-none"
        src={img}
        alt="technologies"
        style={{ animationDelay: `${Number(i) * 0.5}s` }}
      />
    </section>
  );
}
