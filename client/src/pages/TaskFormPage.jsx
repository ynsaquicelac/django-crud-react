import { useEffect } from "react"
import { useForm, set } from "react-hook-form"
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api"
import { useNavigate, useParams } from 'react-router-dom'

export function TaskFormPage() {
    const { register, handleSubmit, formState: {
        errors
    }, setValue } = useForm();
    const navigate = useNavigate();
    const { id } = useParams()

    const onSubmit = handleSubmit(async data => {
        if (id) {
         await updateTask(id, data)
        } else {
            await createTask(data)
        }
        navigate("/tasks")
    })

    useEffect(() => {
        async function loadTask() {
            if (id) {
                const res = await getTask(id)
                console.log(res)
                setValue('title', res.data.title)
                setValue('description', res.data.description)
            }
        }
        loadTask()

    }, [])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title"
                    {...register("title", { required: true })}
                />
                {errors.title && <span>This field is required</span>}
                <textarea rows="3" placeholder="Description" {...register("description", { required: true })} />
                {errors.description && <span>This field is required</span>}
                <button>Save</button>

            </form>
            {id && <button onClick={async () => {
                const accepted = window.confirm('Are you sure?');
                if (accepted) {
                    await deleteTask(id)
                    navigate('/tasks')
                }
            }}>Delete</button>}
        </div>
    )
}