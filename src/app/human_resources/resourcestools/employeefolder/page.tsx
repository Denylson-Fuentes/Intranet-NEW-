import FolderLink from "../../_components/folderlink"

export default function EmployeeFolder(){
    return(
        <div>
            <div className="content-center my-2 w-full h-[235px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/unicorn.svg)'}}>
            </div>

            <section className=" md:px-5 md:py-5 flex-row justify-center ">
                <div className=" p-1 mx-10 grid md:grid-cols-3 sm:grid-col-1 gap-3">
                    <FolderLink folderName="EMPLOYEE HOW TO'S" folderLink="/human_resources/resourcestools/employeeresources"/>
                    <FolderLink folderName="POLICIES AND PROCEDURES" folderLink="/human_resources/resourcestools/"/>
                </div>
            </section>
        </div>
    )
}