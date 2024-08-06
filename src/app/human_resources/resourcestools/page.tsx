

export default function ResourcesTools(){
    return(
        <div>
            <div className="content-center my-2 w-full h-[275px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/unicorn.svg)'}}>
                <p className="text-white text-6xl text-center content-center font-bold tracking-wide">Resources/Tools</p>
            </div>

            <div className=" p-5 flex justify-evenly gap-5">
                <a href='/human_resources/resourcestools/managerfolder' className=" w-1/2 h-[150px] flex justify-start items-center border-4 border-black rounded-full">
                    <p className=" font-semibold w-1/2 ml-5 text-teal-500">MANAGER RESOURCES</p>
                </a>
                
                <a href="/human_resources/resourcestools/employeefolder" className="w-1/2 h-[150px] flex justify-start items-center border-4 border-black rounded-full">
                    <p className=" font-semibold w-1/2 ml-5 text-fuchsia-900">EMPLOYEE RESOURCES</p>
                </a>
            </div>
        </div>
    )
}