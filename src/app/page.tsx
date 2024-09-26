import "./styles/landing.css"

import { api } from "note/trpc/server";
import TaskMaster from "./_components/homepage1";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <>
        <TaskMaster />
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <div className="relative flex flex-row w-full bg-[#112069] min-h-96">
        <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-[#2a3ea1] to-[#112069] z-0"></div>
          <div className="flex flex-col items-center p-6 [&_*]:py-2 m-auto z-10">
            <span className="font-semibold text-3xl">This is the title</span>
            <span className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            <div className="flex flex-col md:flex-row min-h-52 grid-flow-col md:grid-flex-row">
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
