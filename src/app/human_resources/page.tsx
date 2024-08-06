
export default function HR(){
    return (
        <div className=" p-1">

            <div className="content-center my-2 w-full h-[275px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/unicorn.svg)'}}>
                <p className="text-white text-6xl text-center content-center font-bold tracking-wide">Human Resources</p>
            </div>

            <div className="  p-1 w-full text-center flex-col">

                <div className="  py-10">
                    <p className=" content-center text-4xl underline font-medium tracking-tight"> JOB OPENINGS </p>
                </div>
                <section className=" mb-10  p-1 flex justify-center gap-5 text-left">
                    <div className="  p-5 w-1/2 h-72">
                        <p className="underline p-1">College Corner Tutor(Van Nuys, CA)</p>
                        <p className="underline p-1">Part-Time Program Assistant (Gateway Cities Area - Los Angeles, CA)</p>
                        <p className="underline p-1">Part-Time Program Manager (Gateway Cities Area - Los Angeles, CA)</p>
                        <p className="underline p-1">Program Director (Gateway Cities Area - Los Angeles, CA)</p>
                        <p className="underline p-1">Accountant (Los Angeles, CA)</p>
                    </div>
                    <div className=" p-5 w-1/2 h-72 text-base">
                        <p className="underline p-1">Senior Project Manager - Real Estate (Los Angeles, CA)</p>
                        <p className="underline p-1">Senior Accountant (Los Angeles, CA)</p>
                        <p className="underline p-1">Learning Center Instructor (Canoga Park, CA)</p>
                        <p className="underline p-1">Intake Specialist (Canoga Park, CA)</p>
                    </div>
                </section>

                <div className="  text-left px-6">
                    <div className=" text-base">Do you know someone who would be a great candidate? Don't forget about our Referral Program.</div>
                    <div className=" flex text-emerald-600 font-bold text-3xl">You could get up to $500!</div>
                    <div className=" flex justify-center gap-10 py-5">
                        <div className="underline">Referral Program Flyer</div>
                        <div className="underline">Referral Form</div>
                    </div>
                </div>

                <section className="content-center my-2 w-full h-[700px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/people.svg)'}}>
                    <div className="text-center text-white text-4xl font-bold pt-5 w-2/5 pl-10"> 
                        <p className="underline">ADP</p>
                        <div className=" text-lg py-5">
                            Welcome to ADP TotalSource
                            <div className="text-base text-left font-normal pt-4">
                                By clicking the link and signing in you can sign up for benefits, see your pay, review your company policies and so much more. Take a minute to look around and if you can't find what you're looking for you can chat, call or send us a question.

                                <div className=" text-3xl font-semibold">
                                    <p className="py-2 underline">Employee Benefits</p>
                                    <p className="py-2 underline">Employee Handbook</p>
                                    <p className="py-2 underline">Payroll</p>
                                    <p className="py-2 underline">Policies</p>
                                    <p className="py-2">New Economics for Women</p>
                                    <p className="py-2">403(b) Thrift Plan</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className="text-4xl text-center py-10">Performance Review and Development Plan</div>
                    <div className="flex justify-center  p-1 gap-5">
                        <div className="  p-1 w-1/3">
                            <div className="underline font-medium text-center">Employee Documents</div>
                            <div className=" text-left  w-5/6 pl-5">
                                <p className="ml-2 py-1">Performance Review & Development Plan</p>
                                <p className="ml-2 py-1">Employee Preparation Document</p>
                                <p className="ml-2 py-1">Employee Training Deck</p>
                                <p className="ml-2 py-1">Employee Training Video</p>
                                <p className="ml-2 py-1">Employee Timeline</p>
                            </div>
                        </div>
                        <div className="  p-1 w-1/3">
                            <div className="underline font-medium text-center">Manager Documents</div>
                            <div className=" text-left  w-fit pl-5">
                                <p className="ml-2 py-1">Performance Review & Development Plan</p>
                                <p className="ml-2 py-1">Manager Preparation Document</p>
                                <p className="ml-2 py-1">Manager Training Deck</p>
                                <p className="ml-2 py-1">Manager Timeline</p>
                            </div>
                        </div>
                        <div className="  p-1 w-1/3">
                            <div className="underline font-medium text-center">Additional Documents</div>
                            <div className=" text-left  w-5/6 pl-5">
                                <p className="ml-2 py-1">Rating Definition</p>
                                <p className="ml-2 py-1">Performance Measurements Definitions</p>
                            </div>

                        </div>
                    </div>
                </section>


            </div>

        </div>
    )
}