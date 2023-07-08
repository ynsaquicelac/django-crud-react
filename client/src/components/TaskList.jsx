import { useEffect, useState } from 'react';
import { getAllTasks } from "../api/tasks.api"
import { TaskCard } from "./TaskCard"


export function TaskList() {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks()
            setTasks(res.data)
        }
        loadTasks();
    }, []);

    return (
        <div>
            <h1>Task List</h1>
            {tasks.map(task => (
                <TaskCard task={task} key={task.id} />
            ))}
           
        </div>
    );
};
