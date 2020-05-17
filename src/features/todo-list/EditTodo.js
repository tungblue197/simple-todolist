import React, {useState} from 'react'
import PropTypes from 'prop-types'

function EditTodo(props) {
    console.log(props)
    const [taskTitle,setTaskTitle] = useState(props.oldTask.title)

    const handleEditTask = () => {
        console.log("clicked")
        if(taskTitle !== '' && taskTitle !== props.oldTask.title){
             props.editTask(props.oldTask,taskTitle)
             props.turnOffEditMode();
        }
    }
    return (
        <div className='todo-list__edit-form'>
            <input type='text' value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} />
            <button onClick={handleEditTask}>Done</button>
        </div>
    )
}

EditTodo.propTypes = {

}

export default EditTodo

