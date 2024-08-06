

"use client";

import React from 'react';

interface ListProps {
    listTitle: string;
    list: any[];
    textColor: string;
}

const List: React.FC<ListProps> =  ({ listTitle, list, textColor }) => {
    return (
        <div className="  p-1 w-1/3">
            <div className= {`text-3xl my-2 font-bold ${textColor}`}>
                {listTitle}
            </div>

            <div className=" text-black my-2">
                <ul className=" list-disc text-left ml-5">
                    {
                        list.map((item, index) =>{
                            return (
                                item.underlined ? (
                                    <a key={index} href="#" className='underline'>
                                        <li>{item.point}</li>
                                    </a>
                                ) : (
                                    <li key={index}>{item.point}</li>
                                )
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default List