import React from 'react';
import Link from 'next/link';
import { getServerAuthSession } from "note/server/auth";





export default async function Navbar(){
  const session = await getServerAuthSession();
  return (
    <>
    <nav className='w-full bg-gray-900 flex justify-between items-center px-8 py-4 fixed'>
    <div className="text-xl font-bold text-indigo-300">TaskMaster</div>
    <Link
    href={session ? "/api/auth/signout" : "/api/auth/signin"}
    className="bg-blue-700 hover:bg-blue-950 text-white font-bold px-4 py-2 rounded"
    >
    {session ? "Sign out" : "Sign in"}
  </Link>
</nav>
    </>
  )
}