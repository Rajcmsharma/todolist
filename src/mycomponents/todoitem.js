import React from 'react'

export default function Todoitem(props) {
  
  return (
    <div style={{backgroundColor:`${(props.todo.imp==="1")?"rgba(0,255,0,0.3)":(props.todo.imp==="2")?"rgba(255,255,0,0.3)":"rgba(255,0,0,0.3)"}` , borderRadius:"20px"}}>
      <div className='mx-2'>
      <h3>{props.todo.title}</h3>
      <h6>{props.todo.desc}</h6>
      <button className='btn btn-danger btn-sm' onClick={() => { props.onDelete(props.todo) }} >Delete</button>
      <button className='btn btn-primary btn-sm mx-3' onClick={() => { props.editit(props.todo) }} >Edit</button>
      </div>
      <hr/>
    </div>
  );


}

