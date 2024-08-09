import React from 'react'
import { useState } from 'react'
import ListTask from './ListTask';

const AddTask = () => {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [date, setDate] = useState('');

  const HandleTask = (e) => {
    setTaskList([...taskList, task, date]);
    console.log(taskList);
    
    setTask('');
    setDate('');
  }

  return (
    <div>
      <input type="text" placeholder='Add the task' />
      <input type="date" />
      <button onClick={() => {HandleTask()}}>Add</button>
      <div>
        <h2>Task Lists</h2>
        {taskList > 0 ? (
            taskList.map((item, index) => {
              return <ListTask key={index} task={item.task} date={item.date} />
            })
        ) : 'No task available'}
      </div>
    </div>
  )
}

export default AddTask
