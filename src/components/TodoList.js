import React from "react"
import Todo from "./todo";

const TodoList=({todos,setTodos,filtered})=>{
    console.log(todos);
return(

    <div className="todo-container">
<ul className="todo-list">
{filtered.map(todo=>
    (
        <Todo 
        text={todo.text} 
        key={todo.id} 
        todo={todo}
        todos={todos} 
        setTodos={setTodos}></Todo>
    ))}
</ul>
    </div>
);
}
export default TodoList