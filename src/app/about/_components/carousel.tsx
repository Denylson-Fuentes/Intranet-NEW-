"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Gallery({ imgs }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        let newSlide = currentSlide === imgs.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    }

    const handlePrevSlide = () => {
        let newSlide = currentSlide === 0 ? imgs.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    }

    return (
        <div className="relative">
            <AiOutlineLeft
                onClick={handlePrevSlide}
                className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />
            <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
                <Swipe
                    onSwipeLeft={handleNextSlide}
                    onSwipeRight={handlePrevSlide}
                    className="relative z-10 w-full h-full"
                >
                    {imgs.map((img, index) => {
                        if (index == currentSlide){
                            return(
                                <Image
                                key = {index}
                                src={img}
                                layout = "fill"
                                objectFit="contain"
                                className="animate-fadeIn"
                                alt="image"
                                />

                            );
                        }
                    })}
                </Swipe>
            </div>
            <AiOutlineRight
                onClick={handleNextSlide}
                className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />

            <div className="relative flex justify-center p-2">
                {images.map((_, index) => {
                    return (
                        <div
                            className={
                                index === currentSlide
                                ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                                : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                            }
                            key={index}
                            onClick= {()=>{
                                setCurrentSlide(index);
                            }}
                        />
                    )
                })}
            </div>

        </div>
    )
};



