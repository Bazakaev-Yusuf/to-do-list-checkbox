import { useState } from "react"

function TaskForm({add, check, setCheck}){
   const [userText, setUserText] = useState('')

   const handleChange = (e) => {
      setUserText(e.target.value)
   }

   const handleSub = (e) =>{
      e.preventDefault()
      add(userText)
      setUserText('')
      setCheck(false)
   }

   const handleCheck = () =>{
      setCheck(!check)
   }
   return(
      <form className="userText-block">
         <input className="text-input" placeholder="text..." type="text" value={userText} onChange={handleChange} />
         <button className="add-btn" onClick={handleSub}>add</button>
         <input className="checkbox checkbox-add" type="checkbox" checked={check} onChange={handleCheck}/>
      </form>
   )
}
export default TaskForm