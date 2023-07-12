import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from './partners_logo.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




const Form = () => {

    /* Datepicker variables */
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [selectedItem, setSelectedItem] = useState('');


    /* Dropdown variables */
    const handleDropdownChange = (event) => {
      setSelectedItem(event.target.value);
    };

    const [dollarAmount, setDollarAmount] = useState('');

   /* Dollar limiter variables */
    const handleInputChange = (event) => {
    const inputValue = event.target.value;
    // Remove any non-numeric and non-decimal characters from the input value
    const numericValue = inputValue.replace(/[^0-9.]/g, '');
    setDollarAmount(numericValue);
    };




  return (
    <div>
      <nav className="navbar custom-nav">
        <div className="custom-nav">
          <a className="navbar-brand" href="https://www.partnerspersonnel.com/">
            <img src={logo} alt="Company Logo" height="50" href="https://www.partnerspersonnel.com/"/>
          </a>
        </div>
      </nav>
    <form className="App-header">
    <hr className="divider" />
    <div className="form-group" style={{fontWeight: "700"}}>
        <label htmlFor="intro">Finding associates to fill your shifts has never been easier.</label>
    </div>
    <div className="form-group" style={{marginBottom: "12px", fontSize: "16px"}}>
        <label htmlFor="intro">Fill out the info below to get started.</label>
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="name">Company</label>
      <input type="text" className="form-control" placeholder="Company name" />
    </div>
    <div className="form-group col-md-8 item">
      <label htmlFor="address">Address</label>
      <input type="text" className="form-control" placeholder="Where's the company located?" />
    </div>
    <Row className="custom-row">
    <Col md={5} className="item">
    <div className="form-group item">
      <label htmlFor="first">First Name</label>
      <input type="text" className="form-control" placeholder="Enter your first name" />
    </div>
    </Col>
    <Col md={6} className="row-item">
    <div className="form-group item row-item">
      <label htmlFor="last">Last Name</label>
      <input type="text" className="form-control" placeholder="Enter your last name" />
    </div>
    </Col>
    </Row>
    <Row className="custom-row">
    <Col md={5} className="item">
    <div className="form-group  item">
      <label htmlFor="email">Company Email</label>
      <input type="email" className="form-control" placeholder="What's a good company email?" />
    </div>
    </Col>
    <Col md={6} className="row-item">
    <div className="form-group item row-item">
      <label htmlFor="phone">Phone</label>
      <input type="text" className="form-control" placeholder="And a company phone" />
    </div>
    </Col>
    </Row>

    {/*Local branch field here?? Include on form? */}

    <div className="form-group col-md-8 item">
      <label htmlFor="position">Hiring Position</label>
      <input type="text" className="form-control" placeholder="Position to fill" />
    </div>
    <Row className="custom-row">
    
    <Col md={5} className="item">
    <div className="form-group item datepicker">
      <label htmlFor="datepicker" className="datepicker">Start Date</label>
      <DatePicker
        id="datepicker"
        selected={selectedDate}
        onChange={handleDateChange}
        className="form-control"
        dateFormat="MM/dd/yyyy"
      />
    </div>
    </Col>
    <Col md={6} className="row-item">

    <div className='form-group item row-item'>
        <label htmlFor="length-dropdown">Length of Assignment</label>
        <select
          id="length-dropdown"
          value={selectedItem}
          onChange={handleDropdownChange}
          className="form-control"
          style={{appearance: "auto"}}
        >
          <option value="">Indefinitely</option>
          <option value="1 week">1 Week</option>
          <option value="1 month">1 month</option>
          <option value="6 months">6 months</option>
          <option value="1 year">1 year</option>
        </select>
      </div>
    </Col>
    </Row>
    {/*TODO: Shift needs to be a row of checkboxes, and needs 4th option - different time */}
    <Col md={8} className="item">
    <div>
      <label>Shifts to fill</label>
      <div className="d-flex item">
        <div className="form-check me-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkbox1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="checkbox1">
            Day Shift (1st)
          </label>
        </div>
        <div className="form-check me-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkbox2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="checkbox2">
            Afternoon Shift (2nd)
          </label>
        </div>
        <div className="form-check me-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkbox3"
            value="option3"
          />
          <label className="form-check-label" htmlFor="checkbox3">
            Night Shift (3rd)
          </label>
        </div>
        <div className="form-check me-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkbox4"
            value="option4"
          />
          <label className="form-check-label" htmlFor="checkbox4">
            Other
          </label>
        </div>
      </div>
    </div>
    </Col>
    {/*<div className="form-group col-md-8 item">
      <label htmlFor="end">End Time</label>
      <input type="text" className="form-control" placeholder="When they'll end a shift" />
  </div>*/}
    <Row className="custom-row">
    <Col md={5} className="item">
    <div className='form-group item'>
        <label htmlFor="associate-dropdown">Number of Associates</label>
        <select
          id="associate-dropdown"
          value={selectedItem}
          onChange={handleDropdownChange}
          className="form-control"
          style={{appearance: "auto"}}
        >
          <option value="">1-5</option>
          <option value="6-10">6-10</option>
          <option value="11-15">11-15</option>
          <option value="16-20">16-20</option>
          <option value="20+">20+</option>
        </select>
      </div>
    </Col>
    {/*TODO: Modify this to only accept numeric dollar inputs, have divider between $ and numbers */}
    <Col md={6} className="row-item">
    <div className="form-group item row-item">
    <label htmlFor="rate">Hourly Rate</label>
    <div className="input-group">
    <span className="input-group-text">$</span>
        <input
          type="text"
          className="form-control"
          id="dollarAmount"
          value={dollarAmount}
          onChange={handleInputChange}
          inputMode="numeric"
          pattern="[0-9]*\.?[0-9]*"
          placeholder="0.00"
        />
    </div>
    </div>
    </Col>
    </Row>
    

    <div className="form-group col-md-8 item">
      <label htmlFor="manager">Shift Manager</label>
      <input type="text" className="form-control" placeholder="Who is managing the shift?" />
    </div>
    <Row className="custom-row">
    <Col md={5} className="item">
    <div className="form-group item">
      <label htmlFor="manager-phone">Phone</label>
      <input type="text" className="form-control" placeholder="Manager's phone" />
    </div>
    </Col>
    <Col md={6} className="row-item">
    <div className="form-group item row-item" >
      <label htmlFor="manager-email">Email</label>
      <input type="text" className="form-control" placeholder="Manager's email" />
    </div>
    </Col>
    </Row>
    
    {/*TODO: Combine phone and email*/}

    <button type="submit" className="btn btn-primary col-md-4 item button">SUBMIT</button>
    <div className="form-group" style={{marginBottom: "52px", fontSize: "14px"}}>
        <label htmlFor="intro">Need to speak to someone? <a href="https://www.partnerspersonnel.com/locations-list/">Find your local branch</a></label>
    </div>
    
    
    </form>
    
    </div>
  );
};

export default Form;