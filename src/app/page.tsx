import Image from "next/image";
import SmoothScrolling from "./home_comps/smoothScrolling";
import Link from "next/link";
import Gallery from "./about/_components/carousel";

let images = [
  '/2/intranet/public/attack.svg',
  '/2/intranet/public/barbatos.svg',
  '/2/intranet/public/squad.svg',
  '/2/intranet/public/orig.svg',
  '/2/intranet/public/standard.svg',
  '/2/intranet/public/unicorn.svg'
]

export default function Home() {
  return (
    <div className=" bg-white p-0.5">
      <div className="py-10  w-full h-[350px] bg-cover bg-center bg-no-repeat mb-8" style={{backgroundImage:'url(/beach.jpg)'}}>
      </div>
      <div className=" bg-white px-4 pt-2 pb-14">
        <p className=" text-7xl text-black text-center font-semibold">June News</p>
      </div>
      <div className='flex-grow h-px mx-14 border-2 border-gray-500 rounded' ></div>
      
      <div className=" justify-evenly gap-2 p-2 bg-white flex items-center">
        <div className=" bg-white p-5">
          <div className=" bg-white py-4 px-10 text-black text-5xl font-bold underline">
            <p>Holidays</p>
          </div>
          <div className="text-black text-2xl align-middle">
            <div className="flex">
              <p className="font-semibold pr-2">June 14th </p> 
              <p className="font-normal ">Flag Day </p>
            </div>
            <div className="flex">
              <p className="font-semibold pr-2">June 16th </p> 
              <p className="font-normal">Father's Day</p>
            </div>
            <div className="flex">
              <p className="font-semibold pr-2">June 19th</p> 
              <p className="font-normal pr-1">Flag Day </p> 
              <p className="text-red-500">(DAY OFF)</p>
            </div>
          </div>
        </div>
        <div className=" bg-slate-700 p-5 flex-column">
          <div className="bg-slate-800 p-5">
            {/* <SmoothScrolling page = 'home'/> */}
          </div>
          <div className="bg-slate-800 p-5 text-white ">
            <p>Share out 2022-2023 Impact Filter with your communities</p>
          </div>
        </div>
      </div>

      <section>
        <div className=" text-center text-3xl font-semibold italic py-5">
          <p>Father's at NEW</p>
        </div>
        <div className="items-center p-5 bg-red-300 flex-col">

          <div className="flex p-3 bg-blue-600 justify-evenly">
            <div className="bg-white p-10">
              <div className="p-10 bg-slate-400 ">
                <p className="bg-red-500 p-6 w-[250px] h-[250px] text-center content-center">Image</p>
              </div>
              <div>
                <p>Person, Position</p>
              </div>
            </div>
            <div className="bg-white p-3 font-medium text-wrap">
              <p className="text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="py-4">
                -Person, Position
              </p>
            </div>
          </div>



          <div className="flex p-3 bg-blue-600 justify-evenly">
            <div className="bg-white p-10">
              <div className="p-10 bg-slate-400">
                <p className="bg-red-500 w-[250px] h-[250px] text-center content-center">Image</p>
              </div>
              <div>
                <p>Person, Position</p>
              </div>
            </div>
            <div className="bg-white p-3 font-medium text-wrap">
              <p className="text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="py-4">
                -Person, Position
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='flex-grow h-px mx-14 border-2 border-gray-500 rounded' ></div>

      <section className="flex p-5 bg-green-500 justify-center gap-5">
        <div className=" bg-lime-400 p-5 text-left text-wrap w-1/2">
          <p className=" font-bold text-xl p-2">Resources</p>

          <Link href='#'>
            <p className="underline font-medium p-2">Prepare for the Costs of Buying and Owning a Home</p>
          </Link>

          <Link href='#'>
            <p className="underline font-medium p-2">Mortgage Information</p>
          </Link>
        </div>


        <div className=" bg-lime-400 p-20 w-1/2">
          <p className="font-medium text-xl">National Homeownership Month</p>
        </div>
      </section>

      <div className='flex-grow h-px mx-14 border-2 border-gray-400 rounded' ></div>

      <section className=" bg-orange-500 p-5 justify-center flex gap-5">
        <div className=" bg-amber-500 p-5 w-1/2 ">
          <div className=" bg-yellow-200 py-20">
            <p className="text-white font-bold text-xl">Celebrating Juneteenth</p>
          </div>
          <div>
            <p className="font-bold text-large w-4/5 pt-3 pb-2">The History of Juneteenth</p>
            
            <Link href='#'>
              <p className="underline text-large font-medium p-2">National Museum of African American History & Culture</p>
            </Link>
          
            <Link href='#'>
              <p className="underline text-large font-medium p-2">National Geographic - Historic Article</p>
            </Link>
          </div>
        </div>

        <div className=" bg-amber-500 p-5 w-1/2">
          <div className=" bg-yellow-200 py-20">
            <p className="text-white font-bold text-xl">Celebrating Pride Month</p>
          </div>
          <div>
            <p className="font-bold text-large w-4/5 pt-3 pb-2">The History of Pride Month</p>
            
            <Link href='#'>
              <p className="underline text-large font-medium p-2">The Library of Congress</p>
            </Link>
          
            <Link href='#'>
              <p className="underline text-large font-medium p-2">National Archives - LGBTQ+ PrideMonth</p>
            </Link>
          </div>
        </div>
      </section>

      <section className=" bg-blue-600 p-5">
        <div className="text-center text-white text-4xl italic">
          <p>THE LEGACY OF FAMILY GALA 2024</p>
        </div>
        <div className=" bg-sky-200 w-12/12 h-72 px-72">
          {/* <Gallery imgs = {images}/> */}
        </div>
      </section>

    </div>
  );
}
