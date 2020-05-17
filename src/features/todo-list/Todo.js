import React from 'react'
import PropTypes from 'prop-types'

function Todo({task,deleteTask,turnOnEditMode}) {
    const handleDeleteTask = () =>{
        console.log("id of task: ",task.id)
        deleteTask(task.id)
    }


    return (
        <li className="todo-list__item">
            <span className="todo-list__title">{task.title}</span>
            <button className="todo-list__edit" onClick={()=>turnOnEditMode(task)}>Edit</button>
            <button className="todo-list__delete" onClick={handleDeleteTask}>Delete</button>
        </li>
    )
}

Todo.propTypes = {

}

export default Todo

