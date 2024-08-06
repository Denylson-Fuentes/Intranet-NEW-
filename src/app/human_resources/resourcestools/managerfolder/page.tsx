import FolderLink from "../../_components/folderlink";

const managerFolders = [
    {folderName: 'FREQUENTLY USED FORMS', folderLink: '/human_resources/resourcestools/managerfolder/frequently-used-forms'}, {folderName: "MANAGER HOW TO'S", folderLink: '/human_resources/resourcestools/managerfolder/manager-how-tos'},
    {folderName: 'ATTRACTION', folderLink: '/human_resources/resourcestools/managerfolder/attraction'}, {folderName: 'RECRUITMENT', folderLink: '/human_resources/resourcestools/managerfolder/recruitment'},
    {folderName: 'ONBOARDING', folderLink: '/human_resources/resourcestools/managerfolder/onboarding'}, {folderName: 'ASSESS', folderLink: '/human_resources/resourcestools/managerfolder/assess'},
    {folderName: 'RETENTION', folderLink: '/human_resources/resourcestools/managerfolder/retention'}, {folderName: 'DEVELOPMENT', folderLink: '/human_resources/resourcestools/managerfolder/development'},
    {folderName: 'SEPARATION', folderLink: '/human_resources/resourcestools/managerfolder/separation'}, {folderName: 'FEEDBACK', folderLink: '/human_resources/resourcestools/managerfolder/feedback'}
]



export default function ManagerFolder(){
    return (
        <div>
            <div className="content-center my-2 w-full h-[300px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/unicorn.svg)'}}>
                <p className="text-white text-7xl text-center content-center font-bold tracking-wide">Manager Documents</p>
            </div>

            <div className=" p-1 flex justify-center content-center">
                <div className=" p-1 grid grid-cols-3 justify-evenly">
                    {
                        managerFolders.map((item, index) => {
                            return(
                                <FolderLink key={index} folderName={item.folderName} folderLink={item.folderLink} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}