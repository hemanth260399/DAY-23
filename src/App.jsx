import { useEffect, useState } from 'react'
import { v4 } from 'uuid';
import Todotask from "./Todocard.jsx"
import './App.css'

function App() {
  let [tododetails, settododetails] = useState([])
  let [editstate, seteditstate] = useState("")
  let [filtertodo, setfiltertodo] = useState([])
  const [todotask, settodotask] = useState({
    taskname: "",
    taskdescription: "",
  })
  useEffect(() => {
    settodotask(editstate)
  }, [editstate])
  const addtask = (taskdetails) => {
    const task = { ...taskdetails, id: v4(), status: "Not Completed" }
    const newtask = [...tododetails, task]
    settododetails(newtask)
    setfiltertodo(newtask)
  }
  const todochange = (e) => {
    settodotask({
      ...todotask,
      [e.target.name]: e.target.value,
    })
  }
  const loadeditbutton = (data) => {
    seteditstate(data)
  }
  const editbutton = (eobj, eid) => {
    let tempdata = [...tododetails]
    var editindex = tododetails.findIndex((d) => eid === d.id)
    tempdata[editindex] = { ...tododetails[editindex], ...eobj }
    settododetails(tempdata)
    seteditstate("")
  }
  const addtodotask = (e) => {
    e.preventDefault();
    if (editstate) {
      editbutton(todotask, editstate.id)
    }
    else {
      addtask(todotask)
    }
    settodotask({
      taskname: "",
      taskdescription: "",
    })
  }
  const deletetask = (dtd) => {
    const freshtask = tododetails.filter((td) => td.id !== dtd)
    settododetails(freshtask)
  }
  const filtertask = (tid) => {
    settododetails(
      tododetails.map((task) => {
        if (task.id === tid) {
          return { ...task, status: "Completed" }
        }
        return task
      })
    )
    setfiltertodo(
      tododetails.map((task) => {
        if (task.id === tid) {
          return { ...task, status: "Completed" }
        }
        return task
      })
    )
  }

  const sortout = (e) => {
    if (e.target.value === "All") {
      settododetails(filtertodo)
    }
    else {
      const filtertemp = filtertodo.filter((task) => task.status === e.target.value)
      settododetails(filtertemp)
    }
  }

  return (
    <>
      <div style={{ margin: "0px 150px" }}>
        <h3 className='topic'>My todo</h3>
        <div className='topicinput'>
          <input type="text" name="taskname" id="name" placeholder='Todo Name' value={todotask.taskname} onChange={todochange} style={{ margin: 20, width: 300 }} />
          <input type="text" name="taskdescription" id="description" placeholder='Todo description' onChange={todochange} value={todotask.taskdescription} style={{ margin: 20, width: 300 }} />
          <button className='topicbutton' onClick={addtodotask}>{editstate ? "Edit Todo" : "Add Todo"}</button>
        </div>
        <div className='filter'>
          <h4>My Todos</h4>
          <h3 style={{ paddingLeft: 950 }}>Filter</h3>
          <select name="filter" id="filter" value={todotask.status} style={{ height: 25, margin: 5, backgroundColor: 'red' }} onChange={sortout}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
        </div>
        <div>
          {tododetails.map((td) => (
            <Todotask
              key={td.id}
              id={td.id}
              taskname={td.taskname}
              status={td.status}
              taskdescription={td.taskdescription}
              deletetask={deletetask}
              filtertask={filtertask}
              loadeditbutton={loadeditbutton}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
