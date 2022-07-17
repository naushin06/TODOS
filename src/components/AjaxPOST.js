import axios from 'axios'
// import { db } from '../firebase.mjs'

// import React from 'react'

// const AjaxPOST = () => {
//     axios.post({db.collection("todolist")})
//     return (
//     <div>
      
//     </div>
//   )
// }

// export default AjaxPOST

export default axios.create(
    {
        baseURL:"https://tdlprojec-default-rtdb.firebaseio.com/"
    }
)