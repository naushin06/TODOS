import React from "react";


const API = () => {
  const APIFETCH=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
  }
  
  
    return (
    <button onClick={APIFETCH}>yell</button>
  )
}

export default API