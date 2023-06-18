import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import PanelContainer from '../components/PanelContainer';
import PanelHeader from '../components/PanelHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
library.add(faEllipsisVertical)

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augst', 'September', 'October', 'November', 'December'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min : 600, max : 1000 })),
        backgroundColor : (context)=> {
            const bgColor = ["rgba(125, 122, 237, 0.5)", "rgba(255, 255, 255, 0)"]
            if(!context.chart.chartArea){return}

            const { ctx, data, chartArea : { top, bottom } } = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            gradientBg.addColorStop(0.2, bgColor[0])
            gradientBg.addColorStop(0.8, bgColor[1])
            return gradientBg
        },
        borderColor: '#5C59E8',
        fill: true,
        tension: 0.8,
        pointStyle : false,

      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: '#E46A11',
        backgroundColor : (context)=> {
            const bgColor = ["rgba(233, 136, 65, 0.5)", "rgba(255, 255, 255, 0)"]
            if(!context.chart.chartArea){return}

            const { ctx, data, chartArea : { top, bottom } } = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            gradientBg.addColorStop(0.2, bgColor[0])
            gradientBg.addColorStop(0.8, bgColor[1])
            return gradientBg
        },
        tension: 0.8,
        fill : true,
        pointStyle : false
      },
    ],
  };


export default function Statistics() {

    return (<PanelContainer wth={"60%"}>
                <PanelHeader title={"Statistics"} secondTitle="Revenue and Sales">
                    <FontAwesomeIcon icon = "fa-solid fa-ellipsis-vertical"/>
                </PanelHeader>
                <div className='line-chart'>
                    <Line options={options} data={data} />
                </div>
            </PanelContainer>)
  }