import React,{ useState,useEffect } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/TodoList';
import Todo from './components/todo';
import Completed from './components/completed';
import CompletedList from './components/completed';

  
function App() {
const[inputText,setInputText]=useState("");
const[todos,setTodos]=useState([]);
const[statusbar,setStatusBar]=useState("all");
const[filtered, setFiltered]=useState([]);
const [comp,setcomp]=useState([]);


useEffect(()=>{
 FunctionHandler();
},[todos,statusbar]);

const FunctionHandler = ()=>{ 
   switch (statusbar){
    case "completed":
      setFiltered(todos.filter((todo) => todo.completed === true));
      break;
      case "uncompleted":
        setFiltered(todos.filter((todo) => todo.completed === false));
        break;
        default :
        setFiltered(todos);
        setcomp(todos)
       break;
  }
}

  return (

<div className="App">
    <header>
     <h1>ADD ITEM <hr></hr> </h1> 
    </header>
  <Form setInputText={setInputText} setStatusBar={setStatusBar} todos={todos} setTodos={setTodos} inputText={inputText} />

  <h3 className='TODO'>TO-DO LIST <hr className='totohr' /> </h3>
  <TodoList todos={todos} setTodos={setTodos} filtered={filtered} />
  <h3>COMPLETED LIST </h3> 
  {/* <Completed todos={todos} setcomp={setcomp} setTodos={setTodos} filtered={filtered}></Completed> */}
  </div>
    );
}
export default App;
