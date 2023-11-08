import React from 'react';
import '../components/Employee.css'

const EmployeeForm = () => {
  return (
    <div id='emp'>
    <form className='empform'>
    <br></br>
      <h2 id='head'>Employee Form </h2>
      <br></br>
<div className="mb-3">
  <label for="Name" className="form-label">Name</label>
  <input type="text" className="form-control"/>
</div>
  
<div className="mb-3">
  <label for="designation" className="form-label">Designation</label>
  <input type="text" className="form-control" />
</div>

<div className="mb-3">
  <label for="location" className="form-label">Location</label>
  <input type="text" className="form-control"/>
</div>

<div className="mb-3">
  <label for="salary" className="form-label">Salary</label>
  <input type="text" className="form-control" />
</div>


<div className="form-check">
  <button type="submit" className="btn">Submit</button>
  </div>
  <br></br>
  
</form>
  </div>
  );
}

export default EmployeeForm;
