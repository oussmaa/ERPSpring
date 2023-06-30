import SideBar from './SideBar'
import OpenCloseSideBarProvider from '../contexts/OpenCloseSideBarProvider'
import { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadingData, loadingFailed, loadingSuccess } from '../redux/fetchData/fetchActionsTypes'
import { Outlet } from 'react-router'
import NavBar from './NavBar'





const Page = (props) => {
  useEffect(()=> {
        props.loadingData()
        axios.get('https://dummyjson.com/products')
                .then((response)=> {
                     const allProducts = response.data.products;
                     props.loadingSuccess(allProducts)
                }).catch((error)=>{
                     props.loadingFailed(error.message)
                })
    }, [])
  return (
    <div className='global-container'>
    <OpenCloseSideBarProvider>
          <SideBar />
          <div className='main'>
              <NavBar />
              <div className='content-container'>
                <Outlet />
              </div>
          </div>
    </OpenCloseSideBarProvider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading : state.loading,
    products : state.products,
    error : state.error
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    loadingData : ()=> dispatch(loadingData()),
    loadingSuccess : (products) => dispatch(loadingSuccess(products)),
    loadingFailed : (error) => dispatch(loadingFailed(error))
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(Page)
