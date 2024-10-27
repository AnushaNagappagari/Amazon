// import { useState } from "react"
// import { useDispatch } from 'react-redux';
// import { addUsers } from './redux/userSlice';

// const UserForm=()=>{
//     const [userName, setUserName]= useState('')

//     const userNameHandler=(e)=>{
//         e.preventDefault()
//     }

//     const submitHandler =(e)=>{
//         e.preventDefault()
//         dispatch(addUsers(userName))
//         setUserName("")
        
//     }
//     return(
//         <>
//         <form className="formSection" onSubmit={submitHandler}>
//             <h4>UserName</h4>
//             <div className="userInput">
//                 <input type="text" value={userName} onChange={userNameHandler}/>
//                 <button type="submit">submit</button>
//             </div>
//         </form>
//         </>
//     )
// }
// export default UserForm