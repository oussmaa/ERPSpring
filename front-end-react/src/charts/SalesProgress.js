import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import PanelContainer from '../components/PanelContainer';
import PanelHeader from '../components/PanelHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import StcCell from '../components/StcCell';
import Badge from '../components/Badge';
library.add(faEllipsisVertical)

ChartJS.register(ArcElement, Tooltip, Legend)


const sales = 40


const cellsData = [
    {
        title : "Target",
        stat : 20
    },
    {
        title : "Revenue",
        stat : 16
    },
    {
        title : "Today",
        stat : -2
    },
]







const SalesProgress = () => {
    const data = {
        labels : ["yes", "no"],
        datasets : [{
            data : [sales, 100 - sales],
            label : "Poll",
            backgroundColor : ["#5C59E8", "#F0F1F3"],
            borderColor : ["#5C59E8", "#F0F1F3"],
            borderWidth : [3, 1],
            borderStyle : ["solid", "solid"],
            circumference : 180,
            rotation: 270,
        }]
    }
    const options = {
        cutout : "90%",
    }
    const gaugeText =[{
                        id : "gaugeText",
                        beforeDatasetsDraw (chart, args, pluginOptions) {
                            const {ctx} = chart;

                            const xCenter = chart.getDatasetMeta(0).data[0].x;
                            const yCenter = chart.getDatasetMeta(0).data[0].y;


                            ctx.save();
                            ctx.fillStyle = "#333843";
                            ctx.font = "24px bold"
                            ctx.textAlign = "center";
                            ctx.textBaseline = "bottom"
                            ctx.fillText(`${data.datasets[0].data[0]}%`, xCenter , yCenter - 30)
                        }
                        
                    }
]


  return (
    <PanelContainer wth={"30%"}>
        <PanelHeader title={"Sales Progress"} secondTitle="This Quarter">
             <FontAwesomeIcon icon = "fa-solid fa-ellipsis-vertical"/>
        </PanelHeader>
        <div className='d-chart-container'>
            <Doughnut 
                data={data} 
                options={options}
                plugins={gaugeText}
                >
                </Doughnut>
                <Badge content = {"+10%"} nullColor={"#667085"} nullValue={0} valueBg={10}/>
        </div>
        <div className='sales-details'>
            <p>You succeed earn $240 today, its higher than yesterday</p>
            <div className='sales-progress-statistics'>
                {cellsData.map((el, index)=> {
                    return <StcCell key={`cell-${index}`} title = {el.title} stat = {el.stat} />
                })}
            </div>
        </div>
    </PanelContainer>
  )
}

export default SalesProgress
