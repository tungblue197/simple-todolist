import React, {useState} from 'react'
import PropTypes from 'prop-types'

function CreateTodo({createTask,turnOffEditMode}) {
    const [task,setTask] = useState('')
    const handleSubmitForm = (e) => {
        e.preventDefault()
        if(task !== '') createTask({title:task,completed:false});
        setTask('')
        turnOffEditMode()
    }
    
    return (
        <form className="todo-list__form" > 
            <input type="text" placeholder="enter your task" onChange={(e)=>setTask(e.target.value)} value={task}/>
            <button  onClick={(e)=>handleSubmitForm(e)} >ADD</button>
            {
                
            }
        </form>
    )
}

CreateTodo.propTypes = {

}

export default CreateTodo

