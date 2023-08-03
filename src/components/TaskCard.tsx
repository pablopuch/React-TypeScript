import React from 'react'
import { Task } from '../interfaces/Task.interface'

interface Props{
  tasks: Task;
  deleteTask: (id: number) => void;
}

export default function TaskCard({tasks, deleteTask}: Props) {
  return (
    <div className='card card-body bg-secondary rounded-0'>
        <h2>{tasks.title}</h2>
        <p>{tasks.description}</p>
        <button className='btn btn-danger' onClick={() => tasks.id && deleteTask(tasks.id)}>
          delete
        </button>
    </div>
  )
}
