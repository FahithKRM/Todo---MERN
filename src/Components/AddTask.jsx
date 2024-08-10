import { useState, useEffect } from "react";
import ListTask from "./ListTask";
import "./Styles/AddTask.css";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [taskList, setTaskList] = useState([]);

  const HandleTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, { task, date }]);
    setTask("");
    setDate("");
  };

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <div>
      <div className="form">
        <form onSubmit={HandleTask} className="task-form">
          <div className="task-input">
            <input className="add-task"
              type="text"
              value={task}
              placeholder="Add the task"
              onChange={(e) => {
                setTask(e.target.value);
              }}
              required
            />
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
          </div>
          <button className="add-button" type="submit">Add</button>
        </form>
      </div>
      <div className="task-list">
        <h2>Task Lists</h2>
        {taskList.length > 0
          ? taskList.map((item, index) => {
              return <ListTask key={index} task={item.task} date={item.date} />;
            })
          : "No task available"}
      </div>
    </div>
  );
};

export default AddTask;
