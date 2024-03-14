import React, { useEffect, useState } from 'react'
import Todoitem from "./todoitem";

function Todos(props) {
 const [sortedtodos,setsortedtodos]=useState([]);
 useEffect(()=>{
  let tmp=[];
  tmp=[...tmp,...props.todos.filter((todo)=>todo.imp==3)];
  tmp=[...tmp,...props.todos.filter((todo)=>todo.imp==2)];
  tmp=[...tmp,...props.todos.filter((todo)=>todo.imp==1)];
  setsortedtodos(tmp);
 },[props.todos])
 
  return (
    <div className='container'>
      <h1 className='text-center'>To-Do's list</h1>

      {sortedtodos.length ?
        sortedtodos.map((todo) => {
          return (

            <Todoitem key={todo.title} todo={todo} onDelete={props.onDelete} editit={props.editit} />

          );
        }
        )
        : <h5 className='text-center' style={{marginTop:"4.5rem"}}>NO TODO TASK , ENJOY!!!</h5>

      }
      
      
  
    
    </div>
  );

}

export default Todos