"use client";
import * as React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);


const DonutChart = () =>{

    const data ={
        labels:[
            "Feedback", "Separation", "Development", "Retention",
            "Attraction", "Recruitment", "Onboarding", "Assess"
        ],
        datasets:[
            {
                data:[12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5],
                backgroundColor:[
                    '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', 
                    '#4BC0C0', '#9966FF', '#FF6384', '#36A2EB'
                ],
                borderWidth: 1,
                hoverOffset: 4,
            }
        ]
    };

    const options = {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            // SMALL BLACK WINDOW WHEN HOVERING
            // callbacks: {
            //   label: (tooltipItem) => {
            //     return `${data.labels[tooltipItem.dataIndex]}: ${data.datasets[0].data[tooltipItem.dataIndex]}%`;
            //   },
            // },
            enabled: false,
          },
          datalabels: {
            color: '#000',
            anchor: 'end',
            align: 'start',
            offset: 0,
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 25,
            backgroundColor: (context) => {
              return context.dataset.backgroundColor;
            },
            font: {
              weight: 'bold',
            },
            formatter: (value, context) => {
              return context.chart.data.labels[context.dataIndex];
            },
          },
        },
        responsive: true,
        onClick: (e, element) => {
          if (element.length > 0) {
            const index = element[0].index;
            const label = data.labels[index];
            window.location.href = `/`;
          }
        },
        hover: {
          onHover: (e, element) => {
            if (element.length > 0) {
              e.native.target.style.cursor = 'pointer';
            } else {
              e.native.target.style.cursor = 'default';
            }
          },
        },  
    };

    const labelPositions = data.labels.map((label, index) => {
        const angle = (index / data.labels.length) * 2 * Math.PI;
        const x = Math.cos(angle) * 150 + 200;
        const y = Math.sin(angle) * 150 + 200;
        return { x, y, label, angle };
    });

    return (
        <div className="relative w-full h-full">
          <Doughnut data={data} options={options} />
          {data.labels.map((label, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${50 + 45 * Math.cos((index / 8) * 2 * Math.PI)}%`,
                top: `${50 + 45 * Math.sin((index / 8) * 2 * Math.PI)}%`,
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
                <a href={`/`} className="block">
                </a>
            </div>
          ))}
        </div>
    );
};

export default DonutChart;