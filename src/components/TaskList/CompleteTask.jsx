import React from 'react'

const CompleteTask = ({data}) => {
  return (
            <div className='shrink-0 h-full w-75 p-5 bg-yellow-500 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 rounded py-1 text-sm px-3'>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className=' mt-5 w-full'>
                <button className='bg-green-500 px-2 py-1 text-sm rounded-sm w-full'>completed</button>
            </div>
        </div>
  )
}

export default CompleteTask