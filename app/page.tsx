import Image from "next/image";

export default function Home() {
  return (
    <div className="example">
      <h1 >Hello, Next.js!</h1>
      <Image
          src="/next.svg"
          alt="NextJS Logo"
          className="dark:invert my-2 inline-block"
          width={150}
          height={30}
          priority
        />
    </div>
  );
}
