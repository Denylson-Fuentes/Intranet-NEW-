"use client";

import Link from "next/link";


export default function Hero(){
    return (
        <header className="relative flex items-center justify-between px-4">
            <Link href='/#' className="text-primary font-bold text-2xl">
                My Intranet
            </Link>
            <nav className="flex items-center gap-8 text-black font-semibold">
                <Link href='/' className="hover:opacity-100 hover:font-bold cursor-default hover:text-cyan-400 transition duration-300">Home</Link>

                <ul className="flex justify-between font-semibold">
                    <li className="relative group px-3 py-2">
                        <Link href='/about' className="hover:opacity-100 hover:font-bold cursor-default hover:text-cyan-400 transition duration-300">About Me</Link>
                        <div className="absolute top-0 -left-40 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                                <div className="relative z-10">
                                    <div className="grid grid-cols-3 gap-3">
                                        <div>
                                            <ul className="mt-1 text-[15px]">
                                                <li>
                                                    <a href='/about/culture' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">Culture</a>
                                                </li>
                                                <li>
                                                    <a href='#' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">Our Culture Booklet</a>
                                                </li>
                                                <li>
                                                    <a href='/about/strategic_framework' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">Strategic Framework</a>
                                                </li>
                                                <li>
                                                    <a href='/about/locations' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">Locations</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                        <ul className="mt-1 text-[15px]">
                                                <li>
                                                    <a href='#' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">Rituals</a>
                                                </li>
                                                <li>
                                                    <a href='#' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">NEW Ritual Guide</a>
                                                </li>
                                                <li>
                                                    <a href='#' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">Fix it Friday!</a>
                                                </li>
                                                <li>
                                                    <a href='#' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">Wondrous Wednesdays</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                        <ul className="mt-1 text-[15px]">
                                                <li>
                                                    <a href='#' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">Impact Filter</a>
                                                </li>
                                                <li>
                                                    <a href='#' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">How to? Impact Filter Guide</a>
                                                </li>
                                                <li>
                                                    <a href='#' className="block p-2 mx-1 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">Experience Transformer</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="relative group px-3 py-2">
                        <Link href='/human_resources' className="hover:opacity-100 hover:font-bold cursor-default hover:text-cyan-400 transition duration-300">Human Resources</Link>
                        <div className="absolute top-0 -left-40 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                                <div className="relative z-10">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <ul className="mt-1 text-[15px]">
                                                <li>
                                                    <a href='/human_resources/employeejourney' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">NEW Employee Journey</a>
                                                </li>
                                                <li>
                                                    <a href='/human_resources/employeehandbook' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">Employee Handbook</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                        <ul className="mt-1 text-[15px]">
                                                <li>
                                                    <a href='/human_resources/payroll' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">Payroll</a>
                                                </li>
                                                <li>
                                                    <a href='/human_resources/resourcestools' className="block p-2 mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-orange-400 font-semibold hover:text-cyan-500">Resources/Tools</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <Link href='/administration' className="hover:opacity-100 hover:font-bold cursor-default hover:text-cyan-400 transition duration-300">Administration</Link>
                <Link href='/information_technology' className="hover:opacity-100 hover:font-bold cursor-default hover:text-cyan-400 transition duration-300">Information Technology</Link>
                <Link href='/accounting' className="hover:opacity-100 hover:font-bold cursor-default hover:text-cyan-400 transition duration-300">Accounting</Link>
            </nav>
        </header>
    )
}


// import { useState } from "react";
// import styles from './styles/Navbar.module.css';

// const Navbar = () =>{
//     const [showSearch, setShowSearch] = useState(false);

//     const toggleSearch = () =>{
//         setShowSearch(!showSearch);
//     };

//     return (
//         <nav className={styles.nav}>
//             <div className={styles.navLeft}>
//                 <img src='../../images/gundam.png' alt="NEW's Intranet" className={styles.logo} />
//             </div>

//             <div className={styles.navRight}>

//                 <a href='#' className={styles.link}>Home</a>

//                 <div className={styles.dropdown}>
//                     <a href='#' className={styles.link}>About NEW</a>
//                     <button className={styles.arrowButton}>&#x25BC;</button>
//                     <div className={styles.dropdownContent}>
//                         <div className={styles.dropdownTable}>
//                             <a href='#'>Culture</a>
//                             <a href='#'>Rituals</a>
//                             <a href='#'>Impact Filter</a>
//                             <a href='#'>Our Culture</a>
//                             <a href='#'>NEW Rituals</a>
//                             <a href='#'>How to? Impact Filter Guide</a>
//                             <a href='#'>Strategic Framework</a>
//                             <a href='#'>Fix it Friday</a>
//                             <a href='#'>Experience Transformer</a>
//                             <a href='#'>Locations</a>
//                             <a href='#'>Wondrous Wednesday</a>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className={styles.dropdown}>
//                     <a href="#" className={styles.link}>Human Resources</a>
//                     <button className={styles.arrowButton}>&#x25BC;</button>
//                     <div className={styles.dropdownContent}>
//                         <div className={styles.dropdownTableOneColumn}>
//                             <a href='#'>NEW Employee Journey</a>
//                             <a href='#'>Employee Handbook</a>
//                             <a href='#'>Payroll</a>
//                             <a href='#'>Resources/Tools</a>
//                         </div>
//                     </div>
//                 </div>

//                 <a href="#" className={styles.link}>Portfolio</a>
//                 <a href="#" className={styles.link}>Blog</a>
//                 <a href="#" className={styles.link}>Contact</a>
                
//                 <button className={styles.searchToggle} onClick={toggleSearch}>🔍</button>
//             </div>

//             {showSearch && (
//                 <div className={styles.searchContainer}>
//                     <input type="text" placeholder="Search..." className= {styles.searchInput} />
//                 </div>
//             )}

//         </nav>
//     )

// }



// export default Navbar;



































// export default function Header() {
//     return (
//     <header>
//         <div class="nav-left">
//             <img src="../../images/gundam.jpg" alt="NEW's Intranet"></img>
//         </div>
//         <div class="nav-right">

//             <a href="#">Home</a>

//             <div class="dropdown dropdown-about">
//                 <a href="#">About</a>
//                 <button class="arrow-button">&#x25BC;</button>
//                 <div class="dropdown-content">
//                     <div class='dropdown-table'>
//                         <a href='#'>Culture</a>
//                         <a href='#'>Rituals</a>
//                         <a href='#'>Impact Filter</a>
//                         <a href='#'>Our Culture Booklet</a>
//                         <a href='#'>NEW Rituals Guide</a>
//                         <a href='#'>How to? Impact Filter Guide</a>
//                         <a href='#'>Strategic Framework</a>
//                         <a href='#'>Fix it Friday</a>
//                         <a href='#'>Experience Transformer</a>
//                         <a href='#'>Locations</a>
//                         <a href='#'>Wondrous Wednesdays</a>
//                     </div>
//                 </div>
//             </div>


//             <div class="dropdown dropdown-services">
//                 <a href="#">Human Resources</a>
//                 <button class="arrow-button">&#x25BC;</button>
//                 <div class="dropdown-content">
//                     <div class='dropdown-table'>
//                         <a href='#'>NEW Employee Journey</a>
//                         <a href='#'>Employee Handbook</a>
//                         <a href='#'>Payroll</a>
//                         <a href='#'>Resources/Tools</a>
//                     </div>
//                 </div>
//             </div>
            
//             <a href="#">Administration</a>
//             <a href="#">Information Technology</a>
//             <a href="#">Accounting</a>

//         </div>
//     </header>
//     )
// }