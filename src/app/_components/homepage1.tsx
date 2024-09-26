import React from 'react';
// import Link from 'next/link';


export default async function TaskMaster(){
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center">            
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-3/4 mx-auto mt-16 px-8 lg:px-0">
            <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white">Get Started
                <span className="font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"> Today</span> with <span className="font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">TaskMaster!</span>
            </h1>
            <p className='text-gray-400 text-lg'>Give TaskMaster a Try by Typing in Some of Your Daily tasks</p>
            <div className="space-x-4">
                <button className="bg-blue-700 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">Get Started</button>
                <button className='bg-blue-700 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded'>How it works</button>
            </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
            <iframe className='w-full h-64 lg:h-80' src="https://www.youtube.com/embed/5ECdvNnJOa0?si=Jv0YDaOKVOPvoqoE" title="Demo Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            </div>
        </div>
    )
}