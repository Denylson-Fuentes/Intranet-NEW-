"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface MenuItem{
    title: string;
    message?: string;
    route?: string;
}

interface Props{
    item:MenuItem;
    className?: string;
}

const Dropdown: React.FC<Props> = ({ item, className }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(old => !old)
    }

    const transClass = isOpen ? "flex" : "hidden";
    return(
        <>
            <div className=' p-10 min-h-[250px] flex '>
                <section className='flex-col'>
                    <div className='flex justify-end border-b-2 border-black w-[200px] pb-3 text-white' >
                        <button className=' hover:text-orange-500 text-3xl font-semibold text-orange-500 -mr-5' onClick={toggle}>
                            {item?.title} 
                        </button>
                        <Link href={item?.route} className='flex content-center justify-center mt-2 ml-10'>
                            <svg className=" text-white hover:text-black transition delay-50" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                            </svg>
                        </Link>
                        {
                            isOpen ? 
                            <ExpandLessIcon className=' flex text-gray-500 justify-self-end ' fontSize='large'/> 
                            : 
                            <ExpandMoreIcon className='flex text-gray-500 justify-self-end ' fontSize='large'/>
                        }
                    </div>
                    { 
                        isOpen &&
                        <div className= {' top-20 z-30 min-w-[200px] max-w-[400px] min-h-fit flex flex-col py-4 text-lg rounded-md ${transClass}'}>
                            <p 
                                className= {`relative ${className}`}
                            >
                                {item?.message}
                            </p>
                        </div>
                    }
                </section>
            </div>
        </>
    )
}

export default Dropdown;