import React,{ useState,useEffect } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/TodoList';
import Todo from './components/todo';
import Completed from './components/completed';
import CompletedList from './components/completed';
import API from './components/node_learning/pi';
  import AjaxGET from './components/AjaxGET'
function App() {
const[inputText,setInputText]=useState("");
const[todos,setTodos]=useState([]);
const[statusbar,setStatusBar]=useState("all");
const[filtered, setFiltered]=useState([]);
const [comp,setcomp]=useState([]);
const [database,setdatabase]=useState([])



useEffect(()=>{
 FunctionHandler();
},[todos,statusbar]);

const FunctionHandler = ()=>{ 
   switch (statusbar){
    case "completed":
      setdatabase(database.filter((todo) => todo.completed === true));
      break;
      case "uncompleted":
        setdatabase(database.filter((todo) => todo.completed === false));
        break;
        default :
        setdatabase(todos);
       break;
  }
}
  return (
<div className="App">
<h4 className='thead'>To-Do List </h4>
  <Form setInputText={setInputText} setStatusBar={setStatusBar} todos={todos} setTodos={setTodos} inputText={inputText} />
<h6>Added items in the todo list</h6>
  <TodoList todos={todos} setTodos={setTodos} filtered={filtered} database={database} setdatabase={setdatabase} />
  {/* <h3>COMPLETED LIST </h3>  */}
  {/* <Completed todos={todos} setcomp={setcomp} setTodos={setTodos} filtered={filtered}></Completed> */}
{/* <API></API> */}
<AjaxGET></AjaxGET>
</div>

    );
}
export default App;
