import React from 'react'
import Todoitem from "./todoitem";

function Todos(props) {
 
 
  return (
    <div className='container'>
      <h1 className='text-center'>Todos list</h1>

      {props.todos.length ?
        props.todos.map((todo) => {
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