import Link from "next/link";




export default function Accounting(){
    return (
        <div>
            <div className="content-center my-2 w-full h-[275px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/attack.svg)'}}>
                <p className="text-white text-8xl text-center content-center font-bold tracking-wide">Accounting</p>
            </div>

            <div className="text-left p-5 mx-10">
                <Link href="#" className="underline"><p className="py-2">Milage Reimbursement Policy and Procedure</p></Link>
                <Link href="#" className="underline"><p className="py-2">Mileage - Local Travel and Parking Calculator Claim Form</p></Link>
            </div>
        </div>
    )
}