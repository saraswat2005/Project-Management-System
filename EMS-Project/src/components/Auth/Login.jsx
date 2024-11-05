import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>

        <div className='border-2 rounded-xl p-20 border-emerald-600'>

            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center'>

                <input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className='text-white bg-transparent outline-none border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Email' />

                <input value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} required className='text-white bg-transparent outline-none border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter Password' />

                <button className='text-white mt-5 outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log In</button>

            </form>

        </div>

    </div>
  )
}

export default Login