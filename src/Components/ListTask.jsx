import "./Styles/ListTask.css";

const ListTask = ({ task, date }) => {
  return (
    <div className="container">
      <ul>
        <li>
          <div className="list">
            <div className="detail">
              <p className="task">{task}</p>
              <p className="date">{date}</p>
            </div>
            <div className="btn">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListTask;
