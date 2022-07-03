import React,{ useState } from 'react';
import TodoList from "./TodoList";
import Todo from "./todo";


// const CompArray=()=>{
//     const [comp,setcomplex]=useState([]);
//     setcomplex([...comp,{
//         id:comp.id,
//         text:comp.text
//      }])
//      console.log("mnfjhBFKgjKUjfbksjbfkjbfk");
//      console.log(setcomplex)  
// }


// const Completed=({todos,setcomp,setTodos,filtered})=>{

//     todos.map((TODODATA)=>{
//         alert(TODODATA.completed)
//           })
// return(
 
// )


// // todos.map((TODODATA)=>{
// //     // if (TODODATA.completed===true) {

// //       console.log("WE ARE CHECKING")
// //       console.log(TODODATA.text);
// //       return(
// //         // <TodoList todos={todos[i]} setTodos={setTodos} filtered={filtered} />
// //         <div className="todo-container">
// //         <ul className="todo-list">
// //         {filtered.map(todo=>
// //             (
// //                 <Todo 
// //                 text={todo.text} 
// //                 key={todo.id} 
// //                 todo={todo}
// //                 todos={todos} 
// //                 setTodos={setTodos}></Todo>
// //             ))}

// //         </ul>
// //         <h1>fkng</h1>
// //             </div>
    

// //     )  



    
// // })





// //    todos.map((TODODATA)=>{

// // // console.log(TODODATA.completed)
// // if (TODODATA.completed===true) {

// // }


//     // console.log("This is todo");
//     // for(let i=0;i<todos.length;i++)
//     // {
      
//     //   if(todos[i].completed===true){
           
//     //     // console.log("THE COMPLSTED ONE IS THIS ");
//     //     // console.log(todos[i].text);
//     //     let thecomp=todos[i].text;
     
//     // }
//     // console.log(setcomplex)
//     // break;

//         // console.log("IS THE VALUR SAVED IN ARRAY");
//         // console.log(setcomplex);

//     //     return(
//     //     // <TodoList todos={todos[i]} setTodos={setTodos} filtered={filtered} />
//     //     <div className="todo-container">
//     //     <ul className="todo-list">
//     //     {filtered.map(todo=>
//     //         (
//     //             <Todo 
//     //             text={todo.text} 
//     //             key={todo.id} 
//     //             todo={todo}
//     //             todos={todos} 
//     //             setTodos={setTodos}></Todo>
//     //         ))}

//     //     </ul>
//     //     <h1>fkng</h1>
//     //         </div>
    

//     // )  
// // }
// //     break;
       
// }

//     export default Completed
// [1,2,3,4]
// [2,4,6,8]


// const MyComponent = () =>{ 

//     const [sirajState, setSirajState] = useState('Siraj');
//      const stateHandler = () => {
            
//         setSirajState('Shaheen');
//      }
//     return (
//         <>
//         <button onClick={stateHandler()}></button>
//         <p> {{sirajState}}</p>
//         </>
//     )
// }

// export default MyComponent


const CompletedList=({todos,setcomp,statusbar,setTodos,filtered})=>{

const[completed,setcompleted]=useState([])

 const random=()=>{
    console.log("todos");
    console.log({todos});

    for(let i=0;i<todos.length;i++)
    {  
       let complext=todos[i].completed;
       console.log("for the switch");

       switch(complext){
        case true:
        console.log("name check");   
        const crtname=todos[i];
            for(let i=0;i<todos.length;i++){        
            for(let j=0;j<=completed.length;j++){   
              if(completed.length===0 && todos[i].completed===true){
                console.log("kkjgkdgjhkjhgrhgoirhgiorhgiorhgrhgoirhgirjgporhgpirjg");
                console.log(todos[i]);
                setcompleted([...completed,{
                                id:crtname.id,
                                completed:crtname.completed,
                                text:crtname.text
                            }])
                }
                else if(completed[j].name !==todos[i].id){
                    console.log("secondary checking doing here dude");
                    console.log(todos[i]);
                    console.log("abccdefghijklmnopqrstuvwxyzs");
                    const elem=todos[i];
                    setcompleted([...completed,{
                        id:3,
                        completed:true,
                        Text:4
                    }])



                }
                // else if(completed.length>0 ){
                //     console.log(completed.length);
                //     console.log(completed[0]);
                //  //   let k=completed[j];
                //             console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk A EXTRA SPACE IS THERE AND IT SHOULD BE PREF");
                //             // console.log(k);
                //             setcompleted([...completed,{
                //                 id:todos[i].id,
                //                 completed:todos[i].completed,
                //                 Text:todos[i].text
                //             }])

                // }
                // else{
                //     console.log("the end shut and goo");
                // }
                



             
                    // if (completed.length>=0 &&  todos[i].id!==completed[j].id){
                    //    console.log({tod})
                    //     setcompleted([...completed,{
                    //         id:todos[i].id,
                    //         completed:todos[i].completed,
                    //         Text:todos[i].text
                    //     }])
                    //     console.log("IT IS ADDED SO CRY");
                    // } else {
                    //     console.log("ITEM PROBABLY CAN'T BE ADDED TWICE");
                    // }

                    

                  }

            // }
            }



        // for(i=0;i<completed.length;i++){
        //     if(completed[i].id!==todos[i].id)

        //     console.log("jeghUGUGHRIOUGHOrighRIHGPRhprijhprojpoHRJHORJHPOjporjojHPORHPOGHPOehgpohpgs");

        //     setcompleted([...completed,{
        //                         id:todos[i].id,
        //                         completed:todos[i].completed,
        //                         Text:todos[i].text
        //                     }])
            

        // } 
        break


        case false:
            console.log("break it is");
            continue;
     default:
     console.log("COME TO SENSE IT'S ADDED OR WHAT");
        }
                        continue;

    }

     
    console.log("this is the completed array");
    console.log({completed});
return
 }
    return(
<>
<button onClick={random}>ff</button>
</>
        )

}

export default CompletedList
