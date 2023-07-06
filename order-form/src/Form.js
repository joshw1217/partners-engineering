import React from 'react';
import logo from './partners_logo.png';


const Form = () => {
  return (
    <div>
      <nav className="navbar custom-nav">
        <div className="custom-nav">
          <a className="navbar-brand" href="www.parnterspersonnel.com">
            <img src={logo} alt="Company Logo" height="50" />
          </a>
        </div>
      </nav>
    <form className="App-header">
    <hr className="divider" />
    <div className="form-group" style={{marginBottom: "1rem"}}>
        <label htmlFor="intro">Finding associates to fill your shifts has never been easier.</label>
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="name">Company</label>
      <input type="text" className="form-control" placeholder="Company name" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="address">Address</label>
      <input type="text" className="form-control" placeholder="Where's the company located?" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="first">First Name</label>
      <input type="text" className="form-control" placeholder="Enter your first name" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="last">Last Name</label>
      <input type="text" className="form-control" placeholder="Enter your last name" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="email">Company Email</label>
      <input type="email" className="form-control" placeholder="What's a good company email?" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="phone">Phone</label>
      <input type="text" className="form-control" placeholder="And a company phone" />
    </div>
    {/*Local branch field here?? Include on form? */}

    <div className="form-group col-md-8 item">
      <label htmlFor="position">Position</label>
      <input type="text" className="form-control" placeholder="Position to fill" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="date">Start Date</label>
      <input type="text" className="form-control" placeholder="What date will they start?" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="duration">Duration</label>
      <input type="text" className="form-control" placeholder="How long do you need them?" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="start">Start Time</label>
      <input type="text" className="form-control" placeholder="When they'll start a shift" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="end">End Time</label>
      <input type="text" className="form-control" placeholder="When they'll end a shift" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="number">Number of Associates</label>
      <input type="text" className="form-control" placeholder="How many people do you need?" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="rate">Hourly Rate</label>
      <input type="text" className="form-control" placeholder="The hourly rate" />
    </div>

    <div className="form-group col-md-8 item">
      <label htmlFor="manager">Shift Manager</label>
      <input type="text" className="form-control" placeholder="Who is managing the shift?" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="manager-phone">Phone</label>
      <input type="text" className="form-control" placeholder="Manager's phone" />
    </div>
    <div className="form-group col-md-8 item" >
      <label htmlFor="manager-email">Email</label>
      <input type="text" className="form-control" placeholder="Manager's email" />
    </div>

    <button type="submit" className="btn btn-primary col-md-4 item button">Submit</button>
    </form>
    
    </div>
  );
};

export default Form;