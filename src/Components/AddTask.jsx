import { useState, useEffect } from "react";
import ListTask from "./ListTask";

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
      <form onSubmit={HandleTask}>
        <input
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
        <button type="submit">Add</button>
      </form>
      <div>
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
