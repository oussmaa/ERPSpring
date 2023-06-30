import React from 'react'
import TimeBar from '../components/TimeBar'
import PanelsRow from '../components/PanelsRow'
import Row from '../components/Row'
import SalesProgress from '../charts/SalesProgress'
import Statistics from '../charts/Statistics'
import ListPanel from '../components/ListPanel'
import TopSellingTable from '../components/TopSellingTable'
import RecentOrders from '../components/RecentOrders'


const HomeDashBoard = () => {
  return (
    <div className='dashboard-home'>
          <TimeBar />
          <PanelsRow />
          <Row cls="charts-row">
              <SalesProgress />
              <Statistics />
          </Row>
          <Row cls="selling-info-row">
            <TopSellingTable/>
            <ListPanel />
          </Row>
            <RecentOrders />
    </div>
  )
}

export default HomeDashBoard
