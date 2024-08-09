
const ListTask = ({task}) => {

  return (
    <div>
        <ul>
            <li>{task} <div><button>Edit</button> <button>Delete</button></div></li>
        </ul>
    </div>
  )
}

export default ListTask
