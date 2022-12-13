import { useState } from "react"
import TaskForm from "./TaskForm"
import Task from "./Task"
function App(){
   const [check, setCheck] = useState(true)
   const [tasks, setTasks] = useState([{
      text: '11111',
      id: 1,
      done: check,
   }])

   

   const add = (userText) =>{
      if(userText){
         const newTask = {
            text: userText,
            id: Math.random().toString(10).substring(2,8),
            done: check,
         }
      setTasks([...tasks, newTask])
      }
   }

   const removeTask = (id) =>{
      setTasks([...tasks.filter((task) => task.id !== id)])
   }

   const hendleChange2 = (id) =>{
      setTasks(tasks.map((item) => item.id === id ? {...item, done: !item.done} : {...item}))
   }

   
   return(
      <div className="app">
         <TaskForm
         add = {add}
         check={check}
         setCheck={setCheck}
         />

         {tasks.map((task) => {
            return(
               <Task
               key = {task.id}
               task={task}
               removeTask={removeTask}
               hendleChange2={hendleChange2}
               />
            )
         })}
      </div>
   )
}
export default App