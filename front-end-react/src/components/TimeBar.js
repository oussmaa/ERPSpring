import React from 'react'
import TimeBarItem from './TimeBarItem'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faPlus } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import ButtonsGroup from './ButtonsGroup';

library.add(faPlus, faCalendarDays)

const dataTime = [
    {
        txt : "All Time",
        value : "all_time"
    },
    {
        txt : "12 Months",
        value : "year"
    },
    {
        txt : "30 Days",
        value : "month"
    },
    {
        txt : "7 Days",
        value : "week"
    },
    {
        txt : "24 Hours",
        value : "day"
    },
]
const buttons1 = [
  {
    icon : "fa-solid fa-calendar-days",
    bgColor : "#FFFFFF",
    txtColor : "#667085",
    value : "select dates",
  },
  {
    icon : "fa-solid fa-plus",
    bgColor : "#5C59E8",
    txtColor : "",
    value : "Add Product",
    type : "link",
    link : "/products/addproduct",
  }
]

const TimeBar = () => {
  return (
    <div className='time-bar'>
      <TimeBarItem  dataTime={dataTime}/>
      <div className='button-container'>
      <ButtonsGroup infoBtn={buttons1} />
        {/* <Button bgCol={"#FFFFFF"} 
                ftSize={"18px"} 
                hgt={"40px"} 
                wdh={"142px"} 
                brd={"1px solid #E0E2E7"}
                txtCol={"#667085"}
                clName={"simple"}>
            <FontAwesomeIcon icon="fa-solid fa-calendar-days" />  Select Dates
        </Button>
        <Button bgCol={"#5C59E8"} 
                ftSize={"18px"} 
                hgt={"40px"} 
                wdh={"142px"} 
                clName={"simple"}>
            <FontAwesomeIcon icon="fa-solid fa-plus" />  Add Product
        </Button> */}
      </div>
    </div>
  )
}

export default TimeBar
