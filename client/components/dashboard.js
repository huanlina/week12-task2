import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title" className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        Dashboard  
      </div>     
      <div>
        <Link to="/dashboard/profile/2b2268af-407f-4d42-af7f-f4f1d1eebe69">Go To Profile</Link>
      </div> 
      <div>  
        <Link to="/dashboard/main">Go To Main</Link> 
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
