"use client"
import { Menu, MenuButton, MenuItem, MenuItems, MenuSection, MenuSeparator } from '@headlessui/react'
import Dropdown from '../../_dropdown_menu/page';
import Link from 'next/link';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const dropdownItems = [
    {title: 'Belief', message: 'We believe economic stability and mobility is a fundamental human right.', route:'#'},
    {title: 'Vision', message: 'A world where generations of women and families are empowered to thrive.', route:'#'},
    {title: 'Mission', message: 'To spark economic mobility for all women and families, particularly Latinas, through wealth creation, housing, education, entrepreneurship, and advocacy for economic justice.', route:'#'},
]

export default function StrategyFrame(){
    const [isOpen1, setIsOpen1] = useState<boolean>(false);
    const [isOpen2, setIsOpen2] = useState<boolean>(false);
    const [isOpen3, setIsOpen3] = useState<boolean>(false);
    const [isOpen4, setIsOpen4] = useState<boolean>(false);

    const toggle1 = () => {
        setIsOpen1(old => !old)
    }

    const toggle2 = () => {
        setIsOpen2(old => !old)
    }

    const toggle3 = () => {
        setIsOpen3(old => !old)
    }

    const toggle4 = () => {
        setIsOpen4(old => !old)
    }

    return (
        <div>
            <div className="content-center my-2 w-full h-[350px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/22-U6jftly7Qz555Kk.svg)'}}>
                <p className="text-white text-8xl text-center content-center font-bold tracking-wide">Strategic Framework</p>
            </div>

            <section className=" p-5">
                <div className="text-teal-500 text-center p-2 my-2 font-bold text-4xl">
                    Strategic Framework (2021-2024)
                </div>

                <div className=" p-2 my-2">
                    <div className='flex md:flex-row justify-evenly content-between sm:flex-col sm:content-center sm:items-center p-3 text-center my-1 gap-5'>
                        <Dropdown item={dropdownItems[0]} className='pl-2 py-1 font-semibold text-start w-[200px]'/>
                        <Dropdown item={dropdownItems[1]} className='pl-2 py-1 font-semibold text-start w-[200px]'/>
                        <Dropdown item={dropdownItems[2]} className='pl-2 py-1 font-semibold text-start text-base w-[250px]'/>
                        
                    </div>
                    <div className=' my-1 w-full text-center content-between gap-5 flex-col'>
                        <div className='flex justify-between border-b-2 border-black w-full pb-3 text-white' >
                            <button className=' hover:text-orange-500 text-3xl font-semibold text-orange-500 -mr-5' onClick={toggle1}>
                                Core Values 
                            </button>
                            
                            {
                                isOpen1 ? 
                                <div className='flex'>
                                    <Link href='#' className='flex content-center justify-center mt-2 ml-10'>
                                        <svg className=" text-white hover:text-black transition delay-50" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                                        </svg>
                                    </Link>
                                    <ExpandLessIcon className=' flex text-gray-500 justify-self-end ' fontSize='large'/>
                                </div> 
                                :
                                
                                <div className='flex'>
                                    <Link href='#' className='flex content-center justify-center mt-2 ml-10'>
                                        <svg className=" text-white hover:text-black transition delay-50" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                                        </svg>
                                    </Link>
                                    <ExpandMoreIcon className='flex text-gray-500 justify-self-end ' fontSize='large'/>
                                </div>
                            }
                        </div>
                        { 
                            isOpen1 &&
                            <div className= {' text-start top-20 z-30 min-w-[200px] max-w-full min-h-fit flex py-4 text-lg rounded-md ${transClass}'}>
                                <div>
                                    <div className='text-lg flex font-bold'>Justice & Equity <p className='ml-1 underline italic text-amber-500'>A Foundation of fundamental human rights</p></div>
                                    <p className='font-semibold text-base'>We advocate for socio economic justice and work to build new economic systems that address race and gender disparities.</p>

                                    <div className='text-lg flex font-bold'>Growth Mind-setting <p className='ml-1 underline italic text-amber-500'>When our clients thrive, humanity thrives</p></div>
                                    <p className='font-semibold text-base'>We equip families with the resources, skills, and confident mindset needed to make sustainable progress towards upward economic mobility.</p>
                                    
                                    <div className='text-lg flex font-bold'>Transformative Tools<p className='ml-1 underline italic text-amber-500'>Breaking barriers, bridging gaps, building equity  </p></div>
                                    <p className='font-semibold text-base'> We are a conduit of opportunities for economic growth and generational change.</p>
                                    
                                    <div className='text-lg flex font-bold'>Generational Impact <p className='ml-1 underline italic text-amber-500'>Stewards of today, and tomorrow </p></div>
                                    <p className='font-semibold text-base'>We work to build a sustainable economic mobility model that will grow and protect our client's assets to maintain financial wealth and create a generational legacy of prosperity.</p>
                                    
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>

            <section className=' my-1 p-4'>
                <div className="text-white text-center p-2 my-2 font-bold text-3xl">
                    <p className='text-purple-800'>PILLARS & GOALS</p>
                </div>
            </section>

            <section className=' my-1 p-4'>
                <div className="text-white text-center p-2 my-2 font-bold">
                    <div className=' p-3 my-1 w-full text-center content-between gap-5 flex-col'>
                        <div className='flex justify-between border-b-2 border-black w-full pb-3 text-white' >
                            <button className='  text-2xl font-semibold text-purple-800 -mr-5' onClick={toggle2}>
                                Transform Programming 
                            </button>
                            
                            {
                                isOpen2 ? 
                                <div className='flex'>
                                    <Link href='#' className='flex content-center justify-center mt-2 ml-10'>
                                        <svg className=" text-white hover:text-black transition delay-50" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                                        </svg>
                                    </Link>
                                    <ExpandLessIcon className=' flex text-gray-500 justify-self-end ' fontSize='large'/>
                                </div> 
                                :
                                
                                <div className='flex'>
                                    <Link href='#' className='flex content-center justify-center mt-2 ml-10'>
                                        <svg className=" text-white hover:text-black transition delay-50" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                                        </svg>
                                    </Link>
                                    <ExpandMoreIcon className='flex text-gray-500 justify-self-end ' fontSize='large'/>
                                </div>
                            }
                        </div>
                        { 
                            isOpen2 &&
                            <div className= {' text-start top-20 z-30 min-w-[200px] max-w-full min-h-fit flex py-4 text-lg rounded-md ${transClass}'}>
                                <div className='text-black text-sm'>
                                    <p>Economic Mobility Road map & Digital Platform</p>
                                    <ul className=' list-disc list-inside'>
                                        <li>Scale programming to attract new national and global funders</li>
                                        <li>Make strategic investments in community development</li>
                                        <li>Finalize and implement a mindset training program for clients</li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>

                    <div className=' p-3 my-5 w-full text-center content-between gap-5 flex-col'>
                        <div className='flex justify-between border-b-2 border-black w-full pb-3 text-white' >
                            <button className='  text-2xl font-semibold text-purple-800 -mr-5 text-start' onClick={toggle3}>
                                Build a Culture of Innovation & Thought Leadership 
                            </button>
                            
                            {
                                isOpen3 ? 
                                <div className='flex'>
                                    <Link href='#' className='flex content-center justify-center mt-2 ml-10'>
                                        <svg className=" text-white hover:text-black transition delay-50" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                                        </svg>
                                    </Link>
                                    <ExpandLessIcon className=' flex text-gray-500 justify-self-end ' fontSize='large'/>
                                </div> 
                                :
                                
                                <div className='flex'>
                                    <Link href='#' className='flex content-center justify-center mt-2 ml-10'>
                                        <svg className=" text-white hover:text-black transition delay-50" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                                        </svg>
                                    </Link>
                                    <ExpandMoreIcon className='flex text-gray-500 justify-self-end ' fontSize='large'/>
                                </div>
                            }
                        </div>
                        { 
                            isOpen3 &&
                            <div className= {' text-start top-20 z-30 min-w-[200px] max-w-full min-h-fit flex py-4 text-lg rounded-md ${transClass}'}>
                                <div className='text-black text-sm'>
                                    <p>Economic Mobility Road map & Digital Platform</p>
                                    <ul className=' list-disc list-inside'>
                                        <li>Scale programming to attract new national and global funders</li>
                                        <li>Make strategic investments in community development</li>
                                        <li>Finalize and implement a mindset training program for clients</li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>

                    <div className=' p-3 my-5 w-full text-center content-between gap-5 flex-col'>
                        <div className='flex justify-between border-b-2 border-black w-full pb-3 text-white' >
                            <button className='  text-2xl font-semibold text-purple-800 -mr-5 text-start' onClick={toggle4}>
                                Increase Financial Health
                            </button>
                            
                            {
                                isOpen4 ? 
                                <div className='flex'>
                                    <Link href='#' className='flex content-center justify-center mt-2 ml-10'>
                                        <svg className=" text-white hover:text-black transition delay-50" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                                        </svg>
                                    </Link>
                                    <ExpandLessIcon className=' flex text-gray-500 justify-self-end ' fontSize='large'/>
                                </div> 
                                :
                                
                                <div className='flex'>
                                    <Link href='#' className='flex content-center justify-center mt-2 ml-10'>
                                        <svg className=" text-white hover:text-black transition delay-50" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                                        </svg>
                                    </Link>
                                    <ExpandMoreIcon className='flex text-gray-500 justify-self-end ' fontSize='large'/>
                                </div>
                            }
                        </div>
                        { 
                            isOpen4 &&
                            <div className= {' text-start top-20 z-30 min-w-[200px] max-w-full min-h-fit flex py-4 text-lg rounded-md ${transClass}'}>
                                <div className='text-black text-sm'>
                                    <p>Build the foundation for a Smart and Healthy Organization</p>
                                    <ul className=' list-disc list-inside'>
                                        <li>Scale programming to attract new national and global funders</li>
                                        <li>Increase unrestricted dollars by $3M</li>
                                        <li>Make strategic investments in real estate</li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}