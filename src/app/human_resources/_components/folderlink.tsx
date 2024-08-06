
"use client";

import React from 'react';

interface FolderProps {
    folderName: string,
    folderLink: string,
}

const FolderLink: React.FC<FolderProps> =  ({ folderName, folderLink }) => {
    return(
        <a href={folderLink} className="  p-5 flex-col mx-1 justify-center w-full items-center">
            <div className=" content-center my-2 w-full h-[275px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/unicorn.svg)'}}>
            </div>

            <div className=" text-center text-3xl underline">
                <p>{folderName}</p>
            </div>

        </a>
    )
}

export default FolderLink;