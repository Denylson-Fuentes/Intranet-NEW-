"use client";
import React from "react";
import List from "../../_components/list_template";

const geninfo = [
    { point: 'Introduction and Purpose of the Handbook', underlined: false}, { point: 'Welcome Message from NEW!', underlined: false}, { point: 'Company History, Vision, Mission, Values, and Goals', underlined: false},
    { point: 'Standards of Conduct', underlined: true}, { point: 'Confidentiality and Non Disclosure Policy Agreement', underlined: true}, { point: 'Employee Handbook Disclaimer', underlined: false}, { point: 'Employee Receipt and Acknowledgement (he/she understands and ill abide by the contents included)', underlined: false}
]

const culinfo = [
    { point: 'Personal Appearance and Personal Hygiene', underlined: true}, { point: 'Working Hours and Overtime', underlined: false}, { point: 'Break and Lunch Periods', underlined: false}, { point: 'Attendance and Punctuality Policy', underlined: true},
    { point: 'Smoke-Free Workplace', underlined: false}, { point: 'Health Insurance', underlined: false}, { point: 'Employee Assistance Program (EAP)', underlined: true}, { point: 'Public Service Loan Forgiveness', underlined: true},
    { point: 'Reimbursement of Business Expense Policy', underlined: true}, { point: 'Code of Conduct Policy for Staff Member Participation in Program Services', underlined: true}, { point: 'Paid Time-Off (Vacation, Sick, and Personal days)', underlined: false}, { point: 'Voicemail, Telephone, E-mails, Internet and Computers Policy ', underlined: true},
    { point: 'Email Policy for General Email (allstaff@neworg.us) ', underlined: true}, { point: 'Performance Expectations and Evaluation', underlined: false}, { point: 'Retirement Plans', underlined: false}, { point: 'Pay Increases', underlined: false},
]

const caseinfo = [
    { point: 'Equal Employment Opportunity Policy', underlined: false},
    { point: 'Accommodation for People with Disability', underlined: false}, { point: 'Internal Employee Application Process', underlined: false}, { point: 'Employee Referral Program', underlined: true}, { point: 'Promotions', underlined: false},
    { point: 'Open Door Policy', underlined: false}, { point: 'Access to Personnel Records', underlined: false}, { point: 'Policy Against Unlawful Harassment in the Workplace', underlined: true}, { point: 'Harassment and Discrimination Reporting Procedure', underlined: false},
    { point: 'Health and Safety Policy', underlined: false}, { point: 'Severe Weather and Emergency Closing', underlined: false}, { point: 'Telecommuting Policy ', underlined: true}, { point: 'Workplace Violence ', underlined: false},
    { point: 'Conflict of Interest', underlined: false}, { point: 'Fund Development Policy', underlined: false}, { point: 'Mileage and Parking Reimbursement Policy and Procedure', underlined: true}, { point: 'Maternity/Parental Leave Policy', underlined: false},
    { point: 'Bereavement Leave', underlined: false}, { point: 'Jury Duty', underlined: false}, { point: 'Family and Medical Leave', underlined: false}, { point: 'Sick Leave', underlined: false},
    { point: 'Disciplinary Process', underlined: false}, { point: 'Complaint Procedure', underlined: false}, { point: 'Employment Termination', underlined: false}, { point: 'Emergency Procedures', underlined: false},
]


export default function Policies(){
    return (
        <div>
            <div className="content-center my-2 w-full h-[325px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/unicorn.svg)'}}>
                <p className="text-white text-8xl text-center content-center font-bold tracking-wide">Policies</p>
            </div>

            <div className=" p-5 flex justify-center content-center">
                <div className=" p-1 flex justify-evenly gap-5 text-center">
                    <List listTitle="General Information" list={geninfo} textColor = 'text-amber-500'/>
                    <List listTitle="Cultural Information" list={culinfo} textColor = 'text-cyan-800'/>
                    <List listTitle="Case Specific Information" list={caseinfo} textColor = 'text-purple-800'/>
                </div>
            </div>
        </div>
    )
}