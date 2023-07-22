import { useReducer } from 'react'


function valueReducer(state,action){
    if(action==="increment"){
        return (state+1)
    } else if (action==="decrement"){
        return (state-1)
    } else if (action==="Reset"){
        return (state=0)
    }
}


function Count(){
   const[value,dispatch]=useReducer(valueReducer,0)
   
   return(
       <div className='Count'>
         <button onClick={()=>{dispatch("increment")}}>increment</button>
         <h1>{value}</h1>
         <button onClick={()=>{dispatch("decrement")}}>decrement</button>
         <button onClick={()=>{dispatch("Reset")}}>Reset</button>
       </div> 
   )
}

export default Count