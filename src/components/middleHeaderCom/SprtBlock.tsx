interface TextSprtBlockProps {
  number: string | number;
  content1: string;
  content2: string;
}

export default function TextSprtBlock({
  number,
  content1,
  content2,
}: TextSprtBlockProps) {
  return (
    <section className="flex items-center text-xl text-white">
      <h1 className="text-center px-2 text-5xl md:text-7xl font-semibold">
        {number}
      </h1>
      <div className="text-xs md:text-xl font-semibold">
        <h1>{content1}</h1>
        <h1>{content2}</h1>
      </div>
    </section>
  );
}
