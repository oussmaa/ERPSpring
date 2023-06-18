import React, { useEffect } from 'react';
import Logo from '../components/Logo';
import NavItem from '../components/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, 
            faBorderAll, 
            faCartShopping, 
            faChartLine, 
            faGear, 
            faHeadphones, 
            faStore, 
            faUserGroup, 
            faXmark} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import { useConsumerOpenClose, useWindowSize } from '../hooks/myHooks';
import { Button } from '@mui/material';
library.add(faBorderAll, 
            faBagShopping,
             faCartShopping, 
             faUserGroup, 
             faStore, 
             faChartLine,
             faHeadphones,
             faGear,
             faXmark)


const sideBodyItems = [
    {
        type : "item",
        text : "Dashboard",
        icon : "fa-solid fa-border-all",
        link : '/'
    },
    {
        type : "toggleMenu",
        text : "Product",
        icon : "fa-solid fa-bag-shopping",
        children : [
            {
                type : "item",
                text : "Product List",
                link : '/products'
            },
            {
                type : "item",
                text : "Categories", 
                link : '/categories'
            }
        ]
    },
    {
        type : "item",
        text : "Orders",
        icon : "fa-solid fa-cart-shopping",
        link : '/orders'
    },
    {
        type : "item",
        text : "Customers",
        icon : "fa-solid fa-user-group",
        link : '/customers'
    },
    {
        type : "item",
        text : "Sellers",
        icon : "fa-solid fa-store",
        link : '/sellers'
    },
    {
        type : "item",
        text : "Analitics",
        icon : "fa-solid fa-chart-line",
        link : '/analytics'
    },
]


const sideFooterItems = [
    {
        type : "item",
        text : "Support",
        icon : "fa-solid fa-headphones",
        link : '/support'
    },
    {
        type : "item",
        text : "Settings",
        icon : "fa-solid fa-gear",
        link : '/settings'
    }
]

const SideBar = () => {
    const [windowWidth, windowHeigth] = useWindowSize()
    useEffect(()=> {
        if(windowWidth <= 990) {
            setSideBarOpen(false)
        }else {
            setSideBarOpen(true)
        }

    }, [windowWidth])
    const { sideBarOpen, setSideBarOpen } = useConsumerOpenClose()

    const handleCloseOpenClick =()=> {
        setSideBarOpen(!sideBarOpen)
    }
    const handleSideBarClick = ()=> {
        if(!sideBarOpen)setSideBarOpen(true)
    }

  return (
    <div className='side-bar' 
            style={{    transform : `translateX(${windowWidth <= 990 && !sideBarOpen? -100 : 0}%)`,
                        width : (sideBarOpen && windowWidth > 990) || windowWidth <= 990? "300px" : "80px",
                        minWidth : sideBarOpen? '200px' : "80px",
                        maxWidth : sideBarOpen? '200px' : "80px" }}
            onClick={()=> handleSideBarClick()}
            >
        <div className='sidebar-header'>
            <Logo />{windowWidth <= 990 && 
                                    <Button onClick={handleCloseOpenClick}><FontAwesomeIcon icon="fa-solid fa-xmark" /></Button> }
        </div>
        <div className='sidebar-body' 
                style={{justifyContent : sideBarOpen? "flex-start" 
                                                        : "center"}}>
          {sideBodyItems.map((el, index)=> {
            return <NavItem 
                        key={el.text + index}
                        elementData={el}
                        ftSize = {"14px"}
                        txtCol = {"#667085"} 
                        bgCol = {"white"} 
                        wdh = "98%"
                        hgt = "40px">
                            <FontAwesomeIcon icon={el.icon} /> {sideBarOpen?el.text:null}
                    </NavItem> 
          }) }
        </div>
        <div className='sidebar-footer'>
        {sideFooterItems.map((el, index)=> {
            return <NavItem 
                        key={el.text + index}
                        elementData={el}
                        ftSize = {"14px"}
                        txtCol = {"#667085"} 
                        bgCol = {"white"} 
                        wdh = "98%"
                        hgt = "40px">
                            <FontAwesomeIcon icon={el.icon} /> {sideBarOpen && el.text}
                    </NavItem> 
          }) }
        </div>
    </div>
  )
}

export default SideBar
