import React from 'react';


const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;