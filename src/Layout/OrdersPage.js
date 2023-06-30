import React from 'react'
import PageHeader from '../components/PageHeader'



const buttons = [
    {
      icon : "fa-solid fa-cloud-arrow-up",
      bgColor : "#FFFFFF",
      txtColor : "#667085",
      value : "Export"
    },
    {
      icon : "fa-solid fa-plus",
      bgColor : "#5C59E8",
      txtColor : "",
      value : "Add Product"
    }
  ]


const OrdersPage = () => {
  return (
    <div className='product-list-page'>
      <PageHeader title={"Orders"}  infoBtn={buttons}/>
    </div>
  )
}

export default OrdersPage
