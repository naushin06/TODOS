import React from "react";
import { db } from "../firebase.mjs";

const Form=({setInputText,todos,setTodos,inputText,setStatusBar})=>{
// function click(){
//   console.log("heyyyynpm");
//   ///preparing the request
// var req=new XMLHttpRequest();

 
//   req.open("GET","https://jsonplaceholder.typicode.com/todos",true);

// //set the callback
  
// req.onreadystatechange=function()
// {
//   console.log(req);
// if(this.readyState === 4){
//   console.log("RESPONSE"+this.responseText);
// console.log(this.status);
// console.log("jhsfgiugi");
// }
// }

// //make the requests
// req.send();
// }

  const InputHandler=(e)=>
{
  console.log(e.target.value);
  setInputText(e.target.value)
}
const submitHandler = (e) => {
e.preventDefault();

if(inputText.length<=0)
{
  return(
    alert("Enter your to-do item")
  )
}
else{
 alert("added suuccessfully")
 let idRan=Math.random()*1000
 const details={
  text:inputText,
  complete:false,
  id:idRan
 }
  setTodos([
    ...todos,{text:inputText, completed:false,id:idRan }
      ]
    )
    console.log(details);

    db.collection("todolist").add({
      text:inputText,
      completed:false,
      id:idRan
    })
}
setInputText("")
}

const StatusBarHandler=(e)=>{
setStatusBar(e.target.value);
}
    return(
        <div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                <p className="title">Add a new task in the list</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                <div class="input-group flex-nowrap">
</div>
       <input placeholder="Enter your item here" value={inputText} onChange={InputHandler} type="text" className="todo-input" required/>
      <button className=" todo-button"   onClick={submitHandler}type="submit">
     <p className="sbtn">submit</p>
      </button>
                </div>
              </div>
            </div>
        <div className="select">
        <select onClick={StatusBarHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>  
   
    </div>
)
    
}
export default Form;