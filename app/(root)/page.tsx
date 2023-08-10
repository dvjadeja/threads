//app/page.tsx
import type { Metadata } from "next";

import { UserButton } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads application",
};

export default function Home() {
  return (
    <>
      <h1 className="head-text text-left">Home</h1>
    </>
  );
}
