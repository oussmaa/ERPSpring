import React from 'react'
import PageHeader from '../components/PageHeader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import AllProductsTable from '../components/AllProductsTable'
import { Outlet } from 'react-router'

library.add(faCloudArrowUp)
const buttons1 = [
  {
    icon : "fa-solid fa-cloud-arrow-up",
    bgColor : "#FFFFFF",
    txtColor : "#667085",
    value : "Export",
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

// style={{border : "2px solid red"}}
const ProductListPage = () => {
  return (
    <div className='product-list-page' >
      <PageHeader title={"Products"}  infoBtn={buttons1}/>
      <AllProductsTable />
    </div>
  )
}

export default ProductListPage
