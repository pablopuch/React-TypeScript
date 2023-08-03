import { ChangeEvent, FormEvent, useState, useRef} from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task.interface";

interface Props{
  newAddTask: (task: Task) => void;
}

type handelInputChange = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>;

const initialState = {
  title: '',
  description:'',
}

export default function TaskForm({newAddTask}: Props){
  const [task, setTask] = useState(initialState);
  const inputTitle = useRef<HTMLInputElement>(null)

    const handelInputChange = ({
      target:{name, value},
    }: handelInputChange) => {
      setTask({...task, [name]:value})
    }

    const handlNewTask = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      newAddTask(task)
      setTask(initialState)
      inputTitle.current?.focus();
    };

  return (
     <div className="card card-body bg-secondary text-dark">
       <h1>Add Task</h1>
        <form onSubmit={handlNewTask}>
          <input
            type="text"
            placeholder="write a title"
            name="title"
            className="form-control mb-3 shadow-none border-0"
            onChange={handelInputChange}
            value={task.title}
            autoFocus
            ref={inputTitle}
            />

            <textarea 
              name="description" 
              rows={2} 
              placeholder='write a description' 
              className='from-control mb-3 shadow-none boder-0'
              onChange={handelInputChange}
              value={task.description}
            ></textarea>

            <br />

            <button className='btn btn-primary'>
              Save
              <AiOutlinePlus/> 
            </button>

        </form>
      </div>
  );
}

















