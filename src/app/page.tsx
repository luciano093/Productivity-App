import Link from "next/link";
import { getServerAuthSession } from "note/server/auth";
import { api } from "note/trpc/server";
import Started from "./_components/started";
import Navbar from "./_components/navbar";
import TaskMaster from "./_components/homepage1";

export default async function Home() {
  const session = await getServerAuthSession();
  void api.post.getLatest.prefetch();

  return (
    <>
        <TaskMaster />
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#0bbfec] text-white">
        <div className="flex flex-row bg-sky-800 w-full h-fit min-h-96">
          <div className="h-full"></div>
          <div className="flex flex-col min-h-full items-center p-6 [&_*]:py-2 m-auto">
            <span className="font-semibold text-3xl">This is the title</span>
            <span className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            <div className="flex flex-row min-h-52 grid-flow-row">
              <div className="flex flex-col max-w-fit">
                <span className="font-semibold text-xl">Subheading</span>
                <span className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
              </div>
              <div className="flex flex-col max-w-fit">
                <span className="font-semibold text-xl">Subheading</span>
                <span className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
              </div>
              <div className="flex flex-col max-w-fit">
                <span className="font-semibold text-xl">Subheading</span>
                <span className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
              </div>
              <div className="flex flex-col max-w-fit">
                <span className="font-semibold text-xl">Subheading</span>
                <span className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
