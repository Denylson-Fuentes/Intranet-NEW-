import React from "react";

import DonutChart from "../_components/donutChart";

export default function EmployeeJourney(){
    return(
        <div>
            <div className="text-center text-xl">Doughnut Example</div>
			<div className=" h-screen bg-gray-100">
                <DonutChart />
            </div>
        </div>
    )
}