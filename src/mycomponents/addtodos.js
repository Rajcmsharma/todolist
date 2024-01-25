import React from 'react'

export default function Addtodos(props) {


  return (
    <div>
      <h2 className='text-center my-5 '>ADD TO-DO</h2>
      <form className="row g-2 mx-3" onKeyDown={(e) => { if (e.key === 'Enter') { props.addtodonow(e) } }} >
        {/* add title */}
        <div className="col-12">
          <label htmlFor="inputtitle" className="form-label">To-Do Title</label>
          <input type="text" className="form-control" id="inputtitle" placeholder="Add title here" />
        </div>
        {/* add description */}
        <div className="col-12">
          <label htmlFor="inputdesc">To-Do Description</label>
          <textarea className="form-control" placeholder="Add description here" id="inputdesc" style={{ height: "100px" }}></textarea>
        </div>
        {/* add Importance */}
        <div className='col-12'>
          <label htmlFor="importance">Task Importance</label>
          <select class="form-select" id="importance">
            <option value="1" selected>Low</option>
            <option value="2" >Medium</option>
            <option value="3">High</option>
          </select>
        </div>
        {/* add button */}
        <div className="col-12">
          <button type="button" className="btn btn-primary" onClick={(e) => { props.addtodonow(e) }} >Add Todo</button>
        </div>
      </form>
    </div>
  )
}
