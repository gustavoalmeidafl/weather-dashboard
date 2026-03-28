import React from 'react'
import './Dashboard.css'
import Sidebar from '../components/Sidebar/sidebar'
import Chart from '../components/Chart/Chart'

const Dashboard = () => {
  return (
    <div>
      <div className="charts">
        <div><Chart/></div>
      </div>
    </div>
  )
}

export default Dashboard
