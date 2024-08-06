
const forms = [
    {formName: 'New Job Opening', formLink: '#'}, {formName: 'Interview Process', formLink: '#'},
    {formName: 'NEW Hire Process', formLink: '#'}, {formName: 'Termination Process', formLink: '#'},
]


export default function ManagerHowTo(){
    return (
        <div>
            <div className="content-center my-2 w-full h-[275px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/unicorn.svg)'}}>
                <p className="text-white text-8xl text-center content-center font-bold tracking-wide">Manager How To</p>
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