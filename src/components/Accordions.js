import React, { useState } from 'react';
import { Accordion} from 'react-bootstrap';
import $ from 'jquery';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Accordions = () => {

  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [firstValidationText, setfirstValidationText] = useState('');
  const [secondValidationText, setSecondValidationText] = useState('');
  const [finalValidationText, setFinalValidationText] = useState('');
  const [telephone, setTelephone] = useState('');
  const [gender, setGender] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [comments, setComments] = useState('');

  const dob = (year + '-' + month + '-' + day);

  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const toggleFirstAccordion = () => {
    //check empty inputs validation
    if (firstName === '' || surname === '' || emailAddress === '') {
      setfirstValidationText('Please ensure all fields has text');
      //check email with regex validation
    } else if (!validEmailRegex.test(emailAddress)) {
      setfirstValidationText('Email address is incorrect')
    } else {
      setfirstValidationText('')
      //close the first accordion
      $('#collapsible-panel-example-0 .accordion-collapse.collapse.show').removeClass('show');
      $('#collapsible-panel-example-0 button.accordion-button').addClass('collapsed');
      //open the second accordion
      $('#collapsible-panel-example-1 .accordion-collapse.collapse').addClass('show');
      $('#collapsible-panel-example-1 button.accordion-button.collapsed').removeClass('collapsed');
    }
  }

  const toggleSecondAccordion = () => {
    if (firstName === '' || surname === '' || emailAddress === '') {
      setSecondValidationText('Please ensure fields from previous step is filled out');
      //check email with regex validation
    } else if (!validEmailRegex.test(emailAddress)) {
      setSecondValidationText('Email address is incorrect')
    } else if (telephone === '' || gender === '' || day === '' || month === '' || year === '') {
      setSecondValidationText('Please ensure all fields has text');
    }else {
      setSecondValidationText('')
      //close the first accordion
      $('#collapsible-panel-example-1 .accordion-collapse.collapse.show').removeClass('show');
      $('#collapsible-panel-example-1 button.accordion-button').addClass('collapsed');
      //open the second accordion
      $('#collapsible-panel-example-2 .accordion-collapse.collapse').addClass('show');
      $('#collapsible-panel-example-2 button.accordion-button.collapsed').removeClass('collapsed');
    }
  }

  const navigate = useNavigate();

  const addUser = () => {
    if (firstName === '' || surname === '' || emailAddress === '' || telephone === '' || gender === '' || day === '' || month === '' || year === '') {
      setFinalValidationText('Please ensure all fields from previous steps is filled out');
      //check email with regex validation
    } else if (!validEmailRegex.test(emailAddress)) {
      setFinalValidationText('Email address is incorrect')
    } else if (comments === '') {
      setFinalValidationText('Please ensure all fields has text');
    } else {
      setFinalValidationText('')
      Axios.post('http://localhost:3001/create', {
        first_name: firstName,
        surname: surname,
        email_address: emailAddress,
        telephone_number: telephone,
        gender: gender,
        dob: dob,
        comments: comments
        }).catch(error => {
          alert('An error occured could not submit to database')
        });
  
        navigate('/users')
    }

  }

  return <div><Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0" id="collapsible-panel-example-0">
    <Accordion.Header>Step 1: Your details</Accordion.Header>
    <Accordion.Body>
    <div className="row">
      <div className="col-4"> 
        <p>First Name</p>
        <input type="text" id="first-name" value={firstName} required onChange={(event) => {setFirstName(event.target.value)}} />
      </div>
      <div className="col-4">
        <p>Surname</p>
        <input type="text" id="surname" value={surname} required onChange={(event) => {setSurname(event.target.value)}} />
      </div>
    </div>
    <div className="row">
      <div className="col-4">
        <p>Email Address</p>
        <input type="text" required id="email"  value={emailAddress} onChange={(event) => {setEmailAddress(event.target.value)}} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-2 offset-md-10">
        <button onClick={toggleFirstAccordion}>Next {'>'}</button>
        <p className='firstAccordionValidation'>{firstValidationText}</p>
      </div>
    </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" id="collapsible-panel-example-1">
    <Accordion.Header>Step 2: More comments</Accordion.Header>
    <Accordion.Body>
    <div className="row">
      <div className="col-4"> 
        <p>Telephone Number</p>
        <input type="text" autoComplete='off' value={telephone} onChange={(event) => {setTelephone(event.target.value)}} />
      </div>
      <div className='col-2'>
        <p>Gender</p>
        <select value={gender} onChange={(event) => {setGender(event.target.value)}}>
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
      </select>
      </div>
      <div className='row'>
        <div className='col-4'>
          <p>Date of birth</p>
          <input type="number" value={day} onChange={(event) => {setDay(event.target.value)}} id="d" name="date" min="1" max="31" />
          <input type="number" value={month} onChange={(event) => {setMonth(event.target.value)}} id="m" name="month" min="1" max="12" />
          <input type="number" value={year} onChange={(event) => {setYear(event.target.value)}} id="y"  name="year" min="1900" max="9999" />
        </div>
      </div>
      <div className='row'>
        <div className="col-md-2 offset-md-10">
          <button id="secondNextButton" onClick={toggleSecondAccordion} >Next {'>'}</button>
          <p className='secondAccordionValidation'>{secondValidationText}</p>
        </div>
      </div>
    </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2" id="collapsible-panel-example-2">
    <Accordion.Header>Step 3: Final comments</Accordion.Header>
    <Accordion.Body>
    <div className='row'>
      <div className="col-4"> 
          <p>Comments</p>
          <textarea name="comments" rows="10" cols="60" value={comments} onChange={(event) => {setComments(event.target.value)}}></textarea>
      </div>
    </div>
    <div className='row'>
        <div className="col-md-2 offset-md-10">
          {/* Ensure to disbale button */}
          <button id="finalNextButton" onClick={addUser}>Next {'>'} </button>
          <p className='finalAccordionValidation'>{finalValidationText}</p>
        </div>
      </div>
    </Accordion.Body>
  </Accordion.Item>
</Accordion></div>;
};

export default Accordions;
