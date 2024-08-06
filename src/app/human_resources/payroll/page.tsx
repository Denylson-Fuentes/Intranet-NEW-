import FolderLink from "../_components/folderlink";


export default function Payroll(){
    return(
        <div>
            <div className="content-center my-2 w-full h-[275px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/unicorn.svg)'}}>
                <p className="text-white text-6xl text-center content-center font-bold tracking-wide">Payroll</p>
            </div>

            <div className="  p-1 flex-col justify-center content-center">
                <div className=" bg-red-700 p-1 my-1 flex justify-center">
                    <div className=" bg-blue-400 p-1 my-1">
                        
                    </div>
                </div>
                <div className=" p-1 my-1 flex justify-center content-center">
                    <div className="p-1 flex justify-center lg:gap-20 md:gap-10 sm:gap-10">
                        <FolderLink folderName="2024 Holiday Schedule" folderLink="#"/>
                        <FolderLink folderName="2024 Payroll Schedule" folderLink="#"/>
                    </div>
                </div>

            </div>
        </div>
    )
}