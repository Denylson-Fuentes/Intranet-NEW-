"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Gallery from "./carousel";

let topImage = ["1", "2", "3"]
let bottomImage = ["1", "2"]
let images = [
    '/2/intranet/public/22-bckGIyUjVEAJQaK.svg', 
    '/2/intranet/public/22-BgOuZukoerJjU0E.svg', 
    '/2/intranet/public/22-U6jftly7Qz555Kk.svg'
]


export default function About(){
 
    return (
    <body className="relative">
        <div className=" bg-gradient-to-r from-cyan-400 via-purple-200 to-orange-400 p-10 block">
            <p className="text-7xl py-10 text-center justify-center font-bold tracking-wide text-white">About Me </p>
        </div>
        <Gallery imgs = {images}/>
        <div
            className="relative bg-gray-400 p-5"
        >
            <div 
                className="justify-center gap-10 bg-blue-300 w-full p-5 flex items-center"
            >
                <div
                    className="p-20 mx-1 bg-red-300"
                >
                    <h1>Image 1</h1>
                </div>

                <div
                    className="p-20 mx-1 bg-red-300"
                >
                    <h1>Image 2</h1>
                </div>

                <div
                    className="p-20 mx-1 bg-red-300"
                >
                    <h1>Image 3</h1>
                </div>


            </div>
            <div 
                className="justify-center gap-10 bg-blue-300 w-full p-5 flex items-center"
            >
                <div
                    className="p-20 mx-1 bg-red-300"
                >
                    <h1>Image 1</h1>
                </div>

                <div
                    className="p-20 mx-1 bg-red-300"
                >
                    <h1>Image 2</h1>
                </div>


            </div>

        </div>
        <div
            className="relative bg-white gap-10 p-5 justify-center flex items-start"
        >
            <div
                className="p-7 bg-white font-serif flex-col w-72"
            >
                <div 
                    className="bg-white p-3 text-xl font-extrabold text-fuchsia-800 text-left"
                >
                    <h1>NEW's Departments</h1>
                </div>
                <div
                    className="p-5 bg-white"
                >
                    <p className="p-2 underline"><Link href="#">Human Resources</Link></p>
                    <p className="p-2 underline"><Link href="#">Administration</Link></p>
                    <p className="p-2 underline"><Link href="#">Information Technology</Link></p>
                    <p className="p-2 underline"><Link href="#">Accounting</Link></p>
                    <p className="p-2 underline"><Link href="#">Real Estate Department</Link></p>
                </div>
            </div>
            <div
                className="p-7 bg-white w-72 text-left"
            >
                <div 
                    className="bg-white p-3 text-xl font-bold text-fuchsia-800"
                >
                    <h1>NEW's Programs</h1>
                </div>
                <div
                    className="p-5 bg-white "
                >
                    <p className="p-2 underline"><Link href="#">FamilySource Center (FSC)</Link></p>
                    <p className="p-2">Homeownership Program</p>
                    <p className="p-2 underline"><Link href="#">After-School Learning Center</Link></p>
                    <p className="p-2">La Posada Program</p>
                    <p className="p-2 underline"><Link href="#">East LA Business Source Center</Link></p>
                    <p className="p-2 underline"><Link href="#">NEW Women's Business Center</Link></p>
                    <p className="p-2">Connecting & Growing EconomicMobility(C-GEM)</p>
                    <p className="p-2">Homeless Prevention Program</p>
                    <p className="p-2">Solid Ground</p>
                    <p className="p-2">KidsFirst</p>
                </div>
            </div>

        </div>
    </body>
    )
}




{/* <div>
            <div className=" bg-gradient-to-r from-cyan-400 via-purple-200 to-orange-400 p-10 block">
                <p className="text-7xl py-10 text-center justify-center font-bold tracking-wide text-white">About Me </p>
            </div>
            <div className="relative mx-auto">
                <div className="slide relative">
                    <Image className= "w-[600px] h-[300px] object-cover" src="/2/intranet/public/22-BgOuZukoerJjU0E.svg" width={200} height= {250}/>
                    <div className="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Image 1</div>
                </div>
                <div className="slide relative">
                    <Image className= "w-[600px] h-[300px] object-cover" src="/2/intranet/public/22-U6jftly7Qz555Kk.svg" width={200} height= {250}/>
                    <div className="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Image 2</div>
                </div>
                <div className="slide relative">
                    <Image className= "w-[600px] h-[300px] object-cover" src="/2/intranet/public/22-bckGIyUjVEAJQaK.svg" width={200} height= {250}/>
                    <div className="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Image 3</div>
                </div>
            </div>

            <a className="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer" onClick="moveSlide(-1)">left</a>
            <a className="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer" onClick="moveSlide(1)">right</a>
        </div>
        <br></br>
        <div className="flex justify-center items-center space-x-5">
            <div className="dot w-4 h-4 rounded full cursor-pointer" onClick="currentSlide(1)"></div>
            <div className="dot w-4 h-4 rounded full cursor-pointer" onClick="currentSlide(2)"></div>
            <div className="dot w-4 h-4 rounded full cursor-pointer" onClick="currentSlide(3)"></div>
        </div> */}