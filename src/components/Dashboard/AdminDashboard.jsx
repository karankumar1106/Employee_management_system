import React from 'react'
import Header from '../others/Headers'
import CreateTask from '../others/createTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({changeUser, data, employees, setEmployees}) => {
  return (
    <div className='h-screen w-full p-7'>
        <Header changeUser={changeUser} data={data}/>
        <CreateTask employees={employees} setEmployees={setEmployees}/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard