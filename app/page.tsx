import Image from "next/image";
import { ModeToggle } from "../components/features/mode-toggle";

export default function Home() {
  return (
    <main className=" font-bold w-full h-screen relative">
      <div className="flex flex-col gap-10 items-center justify-center h-full">
        <h1 className="text-2xl">Adding dark mode switcher</h1>
        <h2 className="text-2xl">using <span className=" rounded p-2 bg-muted-foreground text-white">shadcn</span></h2>
        <ModeToggle />
      </div>
    </main>
  );
}
