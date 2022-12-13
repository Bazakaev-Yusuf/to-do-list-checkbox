function Task({task, hendleChange2, removeTask}){

   
   return(
      <div key={task.id} className="task">
         <div>{task.text}</div>
         <div className="btn-block">
            <input className="checkbox" type="checkbox" checked = {task.done} onChange={() => hendleChange2(task.id)}/>
            <button className="remove-btn" onClick={() => removeTask(task.id)}>x</button>
         </div>
      </div>
   )
}
export default Task