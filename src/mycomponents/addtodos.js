import React from 'react'

export default function Addtodos(props) {


  return (
    <div>
      <h2 className='text-center my-5 '>ADD TO-DOs</h2>
      <form className="row g-2 mx-3"  onKeyDown={(e)=>{if(e.key === 'Enter'){props.addtodonow(e)}}} >
      {/* add title */}
        <div className="col-12">
          <label htmlFor="inputtitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="inputtitle" placeholder="Add title here"  />
        </div>
       {/* add description */}
        <div className="col-12">
          <label htmlFor="inputdesc">Description</label>
          <textarea className="form-control" placeholder="Add description here" id="inputdesc" style={{ height: "100px" }}></textarea>
        </div>
       {/* add button */}
        <div className="col-12">
          <button type="button" className="btn btn-primary" onClick={(e)=>{props.addtodonow(e)}} >Add Todo</button>
        </div>
      </form>
    </div>
  )
}
