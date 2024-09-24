import Link from "next/link";
import { getServerAuthSession } from "note/server/auth";
import { api } from "note/trpc/server";
import Started from "./_components/started";
import Navbar from "./_components/navbar";

export default async function Home() {
  const session = await getServerAuthSession();
  void api.post.getLatest.prefetch();

  return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#0bbfec] text-white">
        <div className="top">
        <p>This To-Do List helps you stay organized and get things done. Add tasks, set priorities, and check them off as you complete them. It’s a simple tool to keep track of what you need to do, all in one place.</p>
        <Navbar />
        <Started />
        </div>
      </main>
  );
}
