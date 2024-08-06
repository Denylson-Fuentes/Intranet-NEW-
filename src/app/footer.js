"use client";

// import styles from './styles/Footer.module.css';
import Link from "next/link";
import Image from 'next/image';

export default function Footer(){
    return (
        <footer className='content-center'>
          <div className='flex-grow h-px bg-white mx-14 border-2 border-gray-400 rounded' ></div>
          <div className='flex justify-center bg-white'>
            <h1 className='flex items-center text-5xl font-bold py-14 text-amber-500'>STAY CONNECTED!</h1>
          </div>
          <div className='flex justify-center gap-5 p-5 bg-gray-100'>
            <Link href='#' className=''> <Image src='/icons8-google.svg' width={50} height={50} /> </Link>
            <Link href='#' className=''> <Image src='/icons8-facebook.svg' width={50} height={50} /> </Link>
            <Link href='#' className=''> <Image src='/icons8-twitter.svg' width={50} height={50} /> </Link>
            <Link href='#' className=''> <Image src='/icons8-instagram.svg' width={50} height={50} /> </Link>
            <Link href='#' className=''> <Image src='/icons8-youtube.svg' width={50} height={50} /> </Link>
          </div>
          <div className='flex justify-start p-5 bg-gray-100'>
            <Image 
              src='/gundam.png' 
              width={100}
              height={100}
              />
          </div>
        </footer>
    )
}