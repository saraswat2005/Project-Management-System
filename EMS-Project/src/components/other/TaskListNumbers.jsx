import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>

        <div className='px-9 py-6 rounded-xl  bg-red-400 w-[45%]'>

            <h2 className='text-3xl font-semibold'>{data.tasksCount.newTask}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>

        </div>


        <div className='px-9 py-6 rounded-xl bg-blue-400 w-[45%]'>

            <h2 className='text-3xl font-semibold'>{data.tasksCount.completed}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>

        </div>


        <div className='px-9 py-6 rounded-xl  bg-green-400 w-[45%]'>

            <h2 className='text-3xl font-semibold'>{data.tasksCount.active}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Active Task</h3>

        </div>


        <div className='px-9 py-6 rounded-xl bg-yellow-400 w-[45%]'>

            <h2 className='text-3xl font-semibold'>{data.tasksCount.failed}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
        </div>


    </div>
  )
}

export default TaskListNumbers