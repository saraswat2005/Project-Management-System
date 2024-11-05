import React from 'react'

const NewTask = ({data}) => {
  console.log(data);
  
  return (
    <div className='flex-shrink-0 p-5 h-full w-[300px] bg-green-400 rounded-xl'>
          <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{data.category}</h3>
                 <h4 className='text-sm'>{data.taskDate}</h4>
          </div>

          <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>

          <p className='text-sm mt-2'>{data.taskDescription}</p>

          <div className='mt-4 flex justify-center '>
             <button className='bg-yellow-400 p-1 text-sm'>Accept Task</button>
          </div>
    </div>
  )
}

export default NewTask