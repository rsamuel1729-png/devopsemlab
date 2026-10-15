import { useState } from 'react'

function App() {
  const [task, setTask] = useState([])
  const [name,setName]=useState("")
  const [time,setTime]=useState("")
  const [date,setDate]=useState("")
  const[editid,seteditid]=useState(null)
  const[search,setSearch]=useState("")
  function add(e){
    e.preventDefault();
    const tasks={
      name,time,date
    }
    if(editid!=null){
      setTask(task.map((t,i)=>i==editid?tasks:t))
    }

    else{
    setTask([...task,tasks])}
    setName("")
    setDate("")
    setTime("")
    seteditid(null)
  }
  function deleteid(i){
    setTask(task.filter((t,id)=>id!=i))
  }
  function edit(t,i){
  setName(t.name)
  setDate(t.date)
  setTime(t.time)
  seteditid(i)
  }
const result=task.filter((t)=>t.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
     <form onSubmit={add}>
      <label>Task Name:</label>
      <input type="text" placeholder='enter task' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <br></br>
      <label>Time:</label>
      <input type="time"  value={time} onChange={(e)=>setTime(e.target.value)}></input>
      <br></br>
      <label>Date:</label>
      <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}></input>
      <br></br>
      <button type="submit">{editid==null?"Add":"Edit"}</button>
     </form>
     <input type="text" placholder='search for task....' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
     <h1>Task List</h1>
     {result.map((t,i)=>(
      <div key="i"><p>  <b>Task</b>:{t.name}   -----      <b>Date</b>:{t.date}   ----     <b>Time</b>{t.time}
      <button onClick={()=>deleteid(i)}>delete</button>
      <button onClick={()=>edit(t,i)}>update</button>
      </p>
      </div>
     ))}
    </>
  )
}

export default App
