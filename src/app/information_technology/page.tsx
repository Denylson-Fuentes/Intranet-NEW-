
export default function InfoTech(){
    return (
        <div>
            <div className="content-center my-2 w-full h-[275px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/squad.svg)'}}>
                <p className="text-white text-6xl text-center content-center font-bold tracking-wide">Information Technology</p>
            </div>
            
            <div className="flex-col bg-white w-full p-5 h-fit place-content-center">
                <div className=" bg-white w-fit text-center">
                    <div className=' h-px mx-5 border-2 border-gray-200 rounded' ></div>
                    <h1 className=" px-[150px] -mx-20 text-5xl font-bold text-teal-400 py-4">HOW TO REQUEST FOR SUPPORT</h1>
                    <div className=' h-px mx-5 border-2 border-gray-200 rounded' ></div>
                </div>

                <div className=" bg-white w-full text-left p-10">
                    <p className="pt-5 pb-2">Help Desk:</p>
                    <p className="pt-2 pb-2">The Help Desk can be reached by phone or email, between 6am and 6pm, Monday through Friday.(holidays excluded) After Hours 818-249-192 x 750</p>
                    <div className="flex-col pt-2 pb-2">
                        <div className="flex">Phone: <p className="pl-2 text-blue-600">818-249-1963</p></div>
                        <div className="flex">Email: <p className="pl-2 text-blue-600">helpdesk@gennet.com</p></div>
                    </div>
                    <div className=" pt-2 pb-2 tracking-normal">
                        <p>
                            <span className="underline italic">All issues and requests should be submitted to the Help Desk to ensure a prompt resolution.</span>
                            <span className="font-medium pl-1">
                                When calling, be sure to provide important details including your full name, the company name, and a description of the issue. In the event our team is unable to answer your call, please leave a detailed message with the above information when you are prompted to do so.
                            </span>
                        </p>
                    </div>
                    <p className=" pt-2 pb-2"> Other key contacts to note:</p>
                    <div className=" pt-2 pb-2 flex-col">
                        <p>GenCare - Technical Account Manager</p>
                        <p>Charles Guariglia</p>
                        <p>Email: <span className="text-blue-600 pl-1">cguariglia@gennet.com</span></p>
                        <p>Phone: <span className="text-blue-600 pl-1">805-500-8909</span></p>
                    </div>
                    <div className=" pt-2 pb-2 flex-col">
                        <p>Account Manager</p>
                        <p>Veronica Place</p>
                        <p>Email: <span className="text-blue-600 pl-1">vplace@gennet.com</span></p>
                    </div>
                    <div className=" pt-2 pb-2 flex-col">
                        <p>GenCare Director of Technical Services</p>
                        <p>Charles Chiu</p>
                        <p>Email: <span className="text-blue-600 pl-1">cchiu@gennet.com</span></p>
                        <p>Phone: <span className="text-blue-600 pl-1">818-330-7516</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}