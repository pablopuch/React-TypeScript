import React from 'react'
import { Task } from '../interfaces/Task.interface'
import TaskCard from './TaskCard'

interface Props{
  tasks: Task[];
  deleteTask: (id: number) => void;
}

export default function TaskList({tasks, deleteTask}: Props) {
  return (
    <>
       {tasks.map(tasks => (
        <div className="col-md-4 p-2" key={tasks.id}>
          <TaskCard tasks={tasks} deleteTask={deleteTask}/>
        </div>
       ))}
    </>
  )
}
