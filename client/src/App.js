import { useEffect, useState } from "react";
import { ListHeader } from "./components/ListHeader";
import { ListItem } from "./components/ListItem";
import { Auth } from "./components/Auth";


const App = () => {

  const userEmail = 'win@google.com'
  const [tasks, setTasks] = useState(null)
  const authToken = false

  const getData = async () =>{
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect( ()=>{
    if(authToken){
      getData()
    }
  }, [])

  console.log(tasks)

  //sort by Date
  const sortedTask = tasks?.sort((a,b) =>new Date(a.date)-new Date(b.date)) 

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken &&
      <>
      <ListHeader listName = {'🏝 Holiday tick list'} getData={getData}/>
      {
        sortedTask?.map((task) => <ListItem key={task.id} task={task} getData={getData}/>)
      } 
      </>
      }
    </div>
  );
}

export default App;
