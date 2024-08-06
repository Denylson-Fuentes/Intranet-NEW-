import React from "react";
import Image from "next/image";

const list1 = ['/2/intranet/public/22-bckGIyUjVEAJQaK.svg', '/2/intranet/public/22-BgOuZukoerJjU0E.svg', '/2/intranet/public/22-U6jftly7Qz555Kk.svg']
const list2 = ['/2/intranet/public/beach.svg', '/2/intranet/public/gundam.png', '/2/intranet/public/next.svg']


export default function ImageList({page}){
    if(page='home'){
        return(
            <>
                {list1.map((item) =>{
                    <Image
                        src = {item}
                        alt = "Image"
                        width = {600}
                        height = {600}
                        priority
                        sizes = "50vw"
                    />
                })}
            </>
        )
    }
    else{
        return(
            <>
                {list2.map((item) =>{
                    <Image
                        src = {item}
                        alt = "Image"
                        width = {600}
                        height = {600}
                        priority
                        sizes = "50vw"
                    />
                })}
            </>
        )
    }
}