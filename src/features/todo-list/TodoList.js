import React, {useContext,useState} from 'react'

import Todo from './Todo'
import {todoListContext} from './TodoListContext'
import './TodoList.scss'
import AddTodo from './AddTodo'
import EditTodo from './EditTodo'

function TodoList(props) {
    const [editMode, setEditMode] = useState(false)
    const [oldTask,setOldTask] = useState({})

    const turnOnEditMode = (task) => {
        console.log(task)
        setOldTask(task)
        setEditMode(true)
    }
    const turnOffEditMode = () =>{
        setEditMode(false)
        setOldTask(null)
    }
    const {
        todoList, 
        createTask,
        deleteTask,
        editTask
    } = useContext(todoListContext);
    return (
        <ul className="todo-list">
            <AddTodo createTask={createTask} turnOffEditMode={turnOffEditMode}/>
            {
                todoList.length > 0 ? todoList.map((task,index)=> <Todo key={index} task={task} deleteTask={deleteTask}  turnOnEditMode={turnOnEditMode}/>) : <NoneTodo/>
            }
            {
                editMode ? <EditTodo turnOffEditMode={turnOffEditMode} oldTask={oldTask} editTask={editTask}/> : ""
            }
        </ul>
    )
}
function NoneTodo(){
    return <p>Hiện tại chưa có công việc nào, vui lòng thêm công việc mới! </p>
}

export default TodoList

