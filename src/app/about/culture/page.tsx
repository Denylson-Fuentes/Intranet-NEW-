"use client";


import Link from "next/link"
import CircularButton from "../_components/circularbutton"
import React, { useState } from 'react'


export default function Culture(){
    const [activeSection, setActiveSection] = useState<number | null>(null);

    const handleMouseEnter = (index: number) =>{
        setActiveSection(index);
    }

    const handleMouseLeave = () => {
        setActiveSection(null);
    }

    const buttons  = [
        {size:"h-36 w-36 sm:h-28 sm:w-28",  textSize:"text-sm font-semibold", customStyles:"mt-3 ml-16", title:"Why we exist", content:"To sparking economic mobility"},
        {size:"h-36 w-36 sm:h-[110px] sm:w-[110px]",  textSize:"text-sm font-semibold", customStyles:"mt-16 ml-0", title:'Hot Cause', content:"Poverty is a monster destroying hope and prosperity"},
        {size:"h-36 w-36 sm:h-[130px] sm:w-[130px]",  textSize:"text-sm font-semibold", customStyles:"mt-10 ml-0", title:"Cool Solution", content:"We connect people to their own sense of power and economic mobility"},
        {size:"h-48 w-48 sm:h-36 sm:w-36", textSize:"text-sm font-semibold", customStyles:"-mt-5 ml-0", title:"What We Do", content:"We build spaces, design, solutions, educate people, invest in communities and advocate for economic justice"},
        {size:"h-56 w-56 sm:h-40 sm:w-40",  textSize:"text-sm font-semibold", customStyles:"-mt-24 ml-0 p-1",  title:"We Are Successful When", content:"We grow and protect assets. We bridge gaps. What we do leads to a better future"},
    ]

    const cultureValues = [
        { title: 'Belief', borderColor: 'border-orange-400', bgColor: 'bg-orange-400', hoverBgColor: 'hover:bg-orange-400', content: "We believe economic and mobility is a fundamental right" },
        { title: 'Vision', borderColor: 'border-teal-800', bgColor: 'bg-teal-800', hoverBgColor: 'hover:bg-teal-800', content: "A world here generations of women and families are empowered to thrive" },
        { title: 'Mission', borderColor: 'border-fuchsia-800', bgColor: 'bg-fuchsia-800', hoverBgColor: 'hover:bg-fuchsia-800', content: "To spark economic mobility for all women and families, particularly Latinas through wealth creation, housing, education, entrepreneurship, and advocacy for economic justice." },
    ]

    return (
        <div className=" flex-col" >
            {/* Page Image and Title */}
            <section className="mb-6 w-full">
                <div className="content-center h-[300px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/barbatos.svg)'}}>
                    <p className="text-white text-7xl text-center content-center font-bold tracking-wide">CULTURE</p>
                </div>
            </section>

            {/* Our Culture Responsive Introduction P1 */}
            {
                cultureValues.map((section, index) =>{
                    return (
                        <div key={index} className=" grid grid-rows-3 justify-center content-center">
                            <div  
                                className={`col-start-2 col-span-4 grid grid-cols-4 gap-4 h-[25px]${
                                    activeSection === index ? 'col-span-6' : ''
                                }`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div
                                    className={`${activeSection === index ? `text-right content-center col-start-1 p-5 border-r-4 rounded-r-full ${section.borderColor}` : `text-right content-center col-span-3 p-5 border-r-4 rounded-r-full ${section.borderColor}`}`}
                                >
                                    {section.title}
                                </div>

                                <div
                                    className={`${activeSection === index ? `col-start-2 col-span-full ${section.bgColor} py-0.5 border-2 rounded-full ` : `col-start-4 ${section.bgColor} py-0.5 border-2 rounded-full `}`}
                                >
                                    <div className="mx-10 h-full bg-white text-center content-center">
                                    {activeSection === index ? section.content : 'Read more ...'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {/* Our Culture Responsive Introduction P2 */}
            <section>
                <div className="flex items-center justify-center h-[350px] ">
                    {
                    buttons.map((button, index) => (
                        <CircularButton
                            key={index}
                            size={button.size}
                            textSize={button.textSize}
                            customStyles={button.customStyles}
                            title={button.title}
                            content={button.content}
                        />
                    ))}                    
                </div>
            </section>

            {/* Our Culture Responsive Introduction P2 */}
            <section className=" flex justify-center content-center">
                <div className="  p-5 grid grid-cols-5 gap-5 self-center content-center w-5/6">
                    <div className=" col-start-1 col-span-1  p-1 border-blue-800 border-r-2 rounded-r-full text-right content-center self-center h-[40px] sm:text-sm">
                        How We Behave
                    </div>

                    <div className=" col-start-2 col-span-2  p-1 content-center self-center h-fit text-base sm:text-sm">
                        <span className=" text-blue-800 font-semibold">Core Values: </span>
                        <span className=" ">Be authentically bold, we don&apos;t hate, we congratulate, we scrub floors, we buy pencils, we all do budgets.</span>
                    </div>

                    <div className=" col-start-4 col-span-1 p-1 content-center self-center h-fit text-base sm:text-sm">
                        <span className=" text-blue-800 font-semibold">What is Sacred: </span>
                        <span className=" ">Be authentic, be bold, engage, and transform.</span>
                    </div>

                    <div className=" col-start-5 col-span-1 p-1 content-center self-center h-fit text-base sm:text-sm">
                        <span className=" text-blue-800 font-semibold">What is Taboo: </span>
                        <span className=" ">Deceit, manipulation, disengaging, silence.</span>
                    </div>
                </div>
            </section>

            {/* Lower Section */}
            <section className=" my-6 p-5 flex justify-center gap-5 ">
                
                <div className=" w-6/12 p-5 flex justify-end">
                    <div className="content-center w-[500px] h-[350px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/gundam.png)'}}>
                    </div>
                </div>

                <div className=" w-1/2  p-5 ">
                    <div className=" w-[600px]">
                        <p className="text-center text-4xl w-1/2 text-orange-400 py-5 font-semibold">Rituals</p>

                        <div className="text-start text-2xl px-2 mb-2 font-bold">
                            Fix-it-Friday
                            <ul className=" list-disc list-inside text-2xl pl-5 font-normal">
                                <li className="underline">What is Fix-it-Friday?</li>
                                <li className="underline">Submission Form</li>
                            </ul>
                        </div>

                        <div className="text-start text-2xl  font-bold px-2 my-2 -mr-7">
                            Wonderous Wednesday
                            <ul className=" list-disc list-inside text-2xl pl-5 font-normal">
                                <li className="underline ">What is Fix-it-Friday?</li>
                                <li className="underline">Submission Form</li>
                            </ul>
                        </div>
                        <p className="italic underline text-lg"> Review Submissions Link(limited access)</p>
                    </div>

                    <div className=" w-[600px]">
                        <p className="text-center text-4xl w-1/2 text-orange-400 py-5 font-semibold">Strategic Tools</p>

                        <div className="text-start text-2xl px-2 mb-2 font-bold underline">
                            <Link href='#'>Impact Filter</Link>
                            <ul className=" list-disc list-inside text-lg pl-5 font-normal">
                                <li className=" -mr-20">When should I use an Impact Filter?</li>
                            </ul>
                        </div>

                        <div className="text-start text-2xl  font-bold px-2 my-2 -mr-7">
                            <Link href='#' className="underline">
                                Experience Transformer
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}






{/*             <div className=" col-start-2 col-span-4  p-5 grid grid-cols-4 gap-4">
                    <div className=" text-right col-start-1 col-span-3  p-5 border-r-2 rounded-r-full border-orange-400">
                        Belief
                    </div>
                    <div className=" col-start-4 bg-orange-400 py-0.5 border-2 rounded-full ">
                        <div className="mx-10 h-full bg-white text-center content-center">
                                Read more ...
                        </div>
                    </div>
                </div>

                <div className=" col-start-2 col-span-4  p-5 grid grid-cols-4 gap-4">
                    <div className=" text-right col-start-1 col-span-3  p-5 border-r-2 rounded-r-full border-teal-800">
                        Vision
                    </div>
                    <div className=" col-start-4 bg-teal-800 py-0.5 border-2 rounded-full ">
                        <div className="mx-10 h-full bg-white text-center content-center">
                            Read more ...
                        </div>
                    </div>
                </div>

                <div className=" col-start-2 col-span-4  p-5 grid grid-cols-4 gap-4">
                    <div className=" text-right col-start-1 col-span-3  p-5 border-r-2 rounded-r-full border-orange-500">
                        Mission
                    </div>
                    <div className=" col-start-4 bg-fuchsia-800 py-0.5 rounded-full">
                        <div className="mx-10 h-full bg-white text-center content-center">
                            Read more ...
                        </div>
                    </div>
                </div> */}