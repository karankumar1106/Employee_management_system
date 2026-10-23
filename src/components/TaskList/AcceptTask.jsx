import React from 'react'

const AcceptTask = ({data}) => {
  return (
      <div className='shrink-0 h-full w-75 p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 rounded py-1 text-sm px-3'>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='flex gap-3 mt-5'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded-sm'>Mark as completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded-sm'>Mark as failed</button>
            </div>
        </div>
  )
}

export default AcceptTask