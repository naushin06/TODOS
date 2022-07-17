import axios from 'axios';
import React, { useEffect } from 'react'
import AjaxPOST from './AjaxPOST';

const AjaxGET = () => {
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(function(response){
console.log(response);
        })
        .then(function(error){
//console.log(error);

        })
        .then(function(){
console.log("run");
        })
      });
const data={
    text:"naushijkihk",
    completed:false,
    id:3
}
      AjaxPOST.post('/axoz.json',data).then(response=>{
        console.log(response);
      })
    return (
    <div>

    </div>
  )
}
let i=3


axios.delete(`https://jsonplaceholder.typicode.com/todos/${3}`)
.then(res=>console.log("deleted successfully"))

export default AjaxGET

