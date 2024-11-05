import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {

    const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>

        <div  className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
        </div>

       <div>
            {userData.map((elem, idx)=>{
                return <div key={idx} className='mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5 '>{elem.firstName}</h2>
                <h3 className='text-lg font-medium w-1/5 text-blue-800'>{elem.tasksCount.newTask}</h3>
                <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.tasksCount.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-green-300'>{elem.tasksCount.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-white-800'>{elem.tasksCount.failed}</h5>
                        </div>
        })}
       </div>
        
    </div>
  )
}

export default AllTasks