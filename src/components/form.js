import React from "react";


const Form=({setInputText,todos,setTodos,inputText,setStatusBar})=>{
  const InputHandler=(e)=>
{
  console.log(e.target.value);
  setInputText(e.target.value)
}

const submitHandler = (e) => {
  e.preventDefault();
console.log("the value ds");
  console.log(e);
  console.log("the value ds");
  console.log(inputText.length);
if(inputText.length<=0)
{
  return(
    alert("Enter your to-do item")
  )
}
else{
 alert("added suuccessfully")
  setTodos([
    ...todos,{text:inputText, completed:false,id:Math.random()*1000 }
      ]
    )
}
setInputText("")
}

const StatusBarHandler=(e)=>{
setStatusBar(e.target.value);
}
    return(
        <form>
          <div className="container-fluid">
            <div className="row">
              <div className=" col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
        
        <input id="wi" value={inputText} onChange={InputHandler}   type="text" className="todo-input" required/>
        <button className=" todo-button"  onClick={submitHandler}type="submit">
        <i className="fas fa-plus-square"> <p></p></i>
      </button>
      
      
       <div className="select">
        <select onClick={StatusBarHandler} name="todos" className="filter-todo">
      
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      
      </div>  
              </div>



        
            </div>
          </div>






      {/* <input value={inputText} onChange={InputHandler}   type="text" className="todo-input" required/>
      
      <br />
      <button className=" todo-button"  onClick={submitHandler}type="submit">
        <i className="fas fa-plus-square"></i>
      
      </button>
     
      
      
      <div className="select">
        <select onClick={StatusBarHandler} name="todos" className="filter-todo">
      
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      
      </div> */}
     
    </form>

)
}
export default Form;