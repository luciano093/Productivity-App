import Link from "next/link";
import { getServerAuthSession } from "note/server/auth";
import { api } from "note/trpc/server";
import Started from "./_components/started";

export default async function Home() {
  const session = await getServerAuthSession();
  void api.post.getLatest.prefetch();

  return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#0bbfec] text-white">
        <Started />
      </main>
  );
}
