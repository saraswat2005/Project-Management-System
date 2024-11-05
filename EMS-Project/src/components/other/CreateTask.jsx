import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userNewData, setUserNewData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        // Clone data to avoid direct mutation
        const updatedData = [...userNewData];

        let taskAssigned = false;

        updatedData.forEach((elem) => {
            if (assignTo.trim().toLowerCase() === elem.firstName.trim().toLowerCase()) {
                elem.tasks.push(newTask);
                elem.tasksCount.newTask += 1;
                taskAssigned = true;
            }
        });

        if (taskAssigned) {
            setUserNewData(updatedData);
            console.log('New Task Added:', updatedData);
        } else {
            console.log('User not found or invalid assignTo value.');
        }

        // Reset input fields
        setAssignTo('');
        setCategory('');
        setTaskDate('');
        setTaskDescription('');
        setTaskTitle('');
    };

    return (
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
            <form
                onSubmit={submitHandler}
                className="flex w-full flex-wrap items-start justify-between"
            >
                <div className="w-1/2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Write Task"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="date"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="His/Her Name"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Write Category"
                        />
                    </div>
                </div>

                <div className="w-1/2 flex flex-col items-start">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
