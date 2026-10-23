import React from 'react'

const Header = ({changeUser, data}) => {

  const logoutUser = () => {
    localStorage.removeItem("loggedInUser");
    changeUser(null);
  }
  return (
    <div className="flex items-end justify-between">
        <h1 className='text-2xl font-bold'>Hello <br /> <span className='text-3xl font-semibold'>{data?.firstName}</span> </h1>
        <button onClick={logoutUser} className='bg-red-700 text-lg font-medium text-white rounded-sm px-4 py-2 hover:bg-red-900'>Log out</button>
    </div>
  )
}

export default Header