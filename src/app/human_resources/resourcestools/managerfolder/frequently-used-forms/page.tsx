

const forms = [
    {formName: 'Employee Status Change Form', formLink: '#'}, {formName: 'New Hire Offer Request Form', formLink: '#'},
    {formName: 'IT Onboarding Form', formLink: '#'}, {formName: 'Termination Status Form', formLink: '#'},
    {formName: 'IT Offboarding Form', formLink: '#'}, {formName: 'Open a Job Requisition Form', formLink: '#'},
]

export default function FreqUsedForms(){
    return (
        <div>
            <div className="content-center my-2 w-full h-[275px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/unicorn.svg)'}}>
                <p className="text-white text-8xl text-center content-center font-bold tracking-wide">Frequently Used Forms</p>
            </div>

            <div className="lg:mx-96 md:mx-16 sm:mx-24 my-10">
                <ul className="underline text-2xl list-disc list-inside">
                    {
                        forms.map((item, index) =>{
                            return(
                                <a href='#' key={index}><li className="my-3">{item.formName}</li></a>
                            )
                        })
                    }                    
                </ul>
            </div>
        </div>
    )
}