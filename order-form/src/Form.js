import React from 'react';


const Form = () => {
  return (
    <form>
      <div className="form-group row align-items-center">
        <label htmlFor="name" className="col-sm-auto col-form-label">Company</label>
        <div className="col-sm">
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label htmlFor="name" className="col-sm-auto col-form-label">Address</label>
        <div className="col-sm">
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label htmlFor="name" className="col-sm-auto col-form-label">First Name</label>
        <div className="col-sm">
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label htmlFor="name" className="col-sm-auto col-form-label">Last Name</label>
        <div className="col-sm">
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label htmlFor="email" className="col-sm-auto col-form-label">Company email address</label>
        <div className="col-sm">
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label htmlFor="email" className="col-sm-auto col-form-label">Phone</label>
        <div className="col-sm">
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label htmlFor="email" className="col-sm-auto col-form-label">Local Branch</label>
        <div className="col-sm">
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
      </div>
      <hr className="my-4" />
      <div className="form-group row align-items-center">
        <label htmlFor="email" className="col-sm-auto col-form-label">Local Branch</label>
        <div className="col-sm">
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10 offset-sm-2">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Form;