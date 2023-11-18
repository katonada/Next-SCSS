import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="title">Foo - overwrites main's layout</h1>
    </main>
  );
}
