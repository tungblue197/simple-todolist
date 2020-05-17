import React,{createContext, useState, useEffect} from 'react'


let todoListContext = createContext();
function TodoListContextWrapper({children}){
    const [todoList,setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) || [] )

    const createTask = (task)=>{
        if(task) setTodoList([...todoList,{...task,id:todoList.length + 1}]) 
    }
    const deleteTask = (id)=>{
        console.log('on delete',id)
        if(id) {
            setTodoList(todoList.filter(task => task.id !== id))
        }
    }
    const editTask = (oldTask,title)=> {
        console.log(oldTask, title)
        if(oldTask) setTodoList([...todoList.filter(task => task.id !== oldTask.id),{...oldTask,title}])
    }

    useEffect(()=>{
        localStorage.setItem('todoList',JSON.stringify(todoList))
    },[todoList])
    return (
        <todoListContext.Provider value={{ todoList,createTask,deleteTask,editTask }}>
            {children}
        </todoListContext.Provider>
    )
}
export {
    todoListContext
}
export default TodoListContextWrapper;