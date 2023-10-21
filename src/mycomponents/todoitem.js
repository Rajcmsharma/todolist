import React from 'react'

export default function Todoitem(props) {

  return (
    <div >
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button className='btn btn-danger btn-sm' onClick={() => { props.onDelete(props.todo) }} >Delete</button>
      <button className='btn btn-primary btn-sm mx-3' onClick={() => { props.editit(props.todo) }} >Edit</button>
      <hr/>
    </div>
  );


}

