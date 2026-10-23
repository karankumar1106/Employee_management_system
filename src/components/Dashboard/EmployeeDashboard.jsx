import React from 'react'
import Header from '../others/Headers'
import TaksListNumber from '../others/TaksListNumber'
import TaskList from '../TaskList/TaskList' 

const EmployeeDashboard = ({changeUser, data}) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      {/* <h1>Welcome, {data.firstName}!</h1> */}
        <Header changeUser={changeUser} data={data}/>
        <TaksListNumber data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard