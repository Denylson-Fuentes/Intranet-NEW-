"use client";

import React from 'react';

interface LocationProps {
    image: string;
    locationName: string;
    extension: string;
    programList: string[];
}

const Location: React.FC<LocationProps> = ({ image, locationName, extension, programList }) => {
    return (
        <div className="bg-sky-400 p-2 h-full mx-1 my-1 flex-col justify-center items-center place-self-center">
            <div className="flex justify-center items-center text-center text-white text-xl bg-cyan-800 p-1 h-[170px] w-[180px]" style={{ backgroundImage: image }}>
            </div>

            <div className="bg-cyan-800 p-1 my-1 w-[180px]">
                <p className="text-white underline text-center text-2xl">{locationName}</p>
                <p className="text-white text-center text-sm my-3 font-semibold">{extension}</p>
            </div>

            <div className="bg-cyan-800 p-1 my-1 text-white text-base text-center w-[180px]">
                {programList.length > 0 ? (
                    programList.map((program, index) => (
                        <p key={index} className="my-3 underline">{program}</p>
                    ))
                ) : (
                    <p>No programs available</p>
                )}
            </div>
        </div>
    );
}

export default Location;