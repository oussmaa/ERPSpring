import React from 'react'
import PanelContainer from './PanelContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBarcode, faCartShopping, faCreditCard, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import Badge from './Badge';
import CircledIcon from './CircledIcon';
library.add(faMoneyBill, faCartShopping, faBarcode, faCreditCard)

const panelContent = [
    {
        icon : "fa-money-bill",
        title : "Total Revenue",
        value : "$75,500",
        percentageValue : 10,
        style : {color : "#5C59E8",
                 border : "4px solid #EFEFFD",
                 background : "#DEDEFA"}
    },
    {
        icon : "fa-cart-shopping",
        title : "Total Sales",
        value : "31,500",
        percentageValue : 15,
        style : {color : "#0D894F",
                 border : "4px solid #E7F4EE",
                 background : "#CFE7DC"}
    },
    {
        icon : "fa-barcode",
        title : "Product SKU",
        value : "247",
        percentageValue : 0,
        style : {color : "#F04438",
                 border : "4px solid #FEEDEC",
                 background : "#FCDAD7"}
    },
    {
        icon : "fa-credit-card",
        title : "Balance",
        value : "$24,500",
        percentageValue : -25,
        style : {color : "#E46A11",
                 border : "4px solid #FDF1E8",
                 background : "#FAE1CF"}
    },
]

const PanelsRow = () => {
  return (
    <div className='panels-row'>
            {   panelContent.map((el, index)=> {
                    return (<PanelContainer key={`${el.value}-${index}`}>
                                <CircledIcon style={el.style} icon={el.icon} />
                            <div className='panel-body'>
                                
                                    {el.title}
                                
                                 <div className='result'>
                                    {el.value} <Badge 
                                                    content={
                                                        el.percentageValue > 0? `+${el.percentageValue}%`
                                                        : `${el.percentageValue}%`} 
                                                    nullValue={0}
                                                    valueBg={el.percentageValue}
                                                    nullColor={"#667085"}
                                                    />
                                 </div>
                            </div>
                            </PanelContainer>)
                }) 
            }
    </div>
  )
}

export default PanelsRow
