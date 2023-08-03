import { useState } from 'react';
import './App.css';
import logo from './logo.svg'
import { Task } from './interfaces/Task.interface';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

interface Props {
  title?: string;
}



function App({title}: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Titulo de la card",
      description: "learn React",
      completed: false
    }
  ])

  const getCureentTimestamp = (): number => new Date().getTime();

  const newAddTask = (task: Task) => setTasks([...tasks, {...task, id: getCureentTimestamp(), completed: false },]);
  
  const deleteTask = (id: number) => setTasks(tasks.filter(tasks => tasks.id !== id));

  return (
    <div className="bg-dark" style={{height: '150px'}}>
      {/* Navbar */}
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
          <a href="/" className='navbar-brand'>
            <img src={logo} alt="React" style={{width: '40px'}}/>
            {title}
          </a>
        </div>
      </nav>

      <main  className='container p-4'>
        <div className="row">
          <div className="col-md-4">
            <TaskForm newAddTask={newAddTask}/>
          </div>

          <div className="col-md-8">
            <div className='row'>
              <TaskList tasks={tasks} deleteTask={deleteTask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
