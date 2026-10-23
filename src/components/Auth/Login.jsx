import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className="flex items-center justify-center h-screen w-screen">
        <div className="border-2 border-emerald-600 p-20 rounded-lg shadow-lg">
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
             className="flex flex-col items-center justify-center gap-4 p-4">
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                 required
                  className="text-black outline-none bg-transparent border-2 border-emerald-500 text-xl py-2 px-4 rounded-full" type="email" placeholder="Enter your email" />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                 required 
                 className="text-black outline-none bg-transparent border-2 border-emerald-500 text-xl py-2 px-4 rounded-full" type="password" placeholder="Enter your password" />
                <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login 