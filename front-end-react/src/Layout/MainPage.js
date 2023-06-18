import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeDashBoard from './HomeDashBoard'
import NavBar from './NavBar'
import { useConsumerOpenClose } from '../hooks/myHooks'
import ProductListPage from './ProductListPage'
import OrdersPage from './OrdersPage'
import CategoriesPage from './CategoriesPage'
import AddProductPage from './AddProductPage'

const MainPage = () => {
  const { sideBarOpen } = useConsumerOpenClose()
  return (
    <div className='main'>
        <NavBar />
        <div className='content-container'>
          <Routes> 
            <Route path={'/'} element={<HomeDashBoard/>} />
            <Route path={'/products'} element={<ProductListPage/>} />
              <Route path='/products/addproduct' element = {<AddProductPage />} />
            <Route path={'/orders'} element={<OrdersPage/>} />
            <Route path={'/categories'} element={<CategoriesPage/>} />
          </Routes>
        </div>
    </div>
  )
}

export default MainPage
