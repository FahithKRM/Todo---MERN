
const ListTask = ({task, date}) => {

  return (
    <div>
        <ul>
            <li>{task} <br />
            <p>{date}</p><div><button>Edit</button> <button>Delete</button></div></li>
        </ul>
    </div>
  )
}

export default ListTask
