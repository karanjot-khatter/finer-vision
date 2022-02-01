import React, { useState } from 'react';
import { Accordion} from 'react-bootstrap';

const Accordions = () => {

  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const toggleFirstAccordion = () => {

  }

  return <div><Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Step 1: Your details</Accordion.Header>
    <Accordion.Body>
    <div className="row">
      <div className="col-4"> 
        <p>First Name</p>
        <input type="text" value={firstName} required onChange={(event) => {setFirstName(event.target.value)}} />
      </div>
      <div className="col-4">
        <p>Surname</p>
        <input type="text" value={surname} required onChange={(event) => {setSurname(event.target.value)}} />
      </div>
    </div>
    <div className="row">
      <div className="col-4">
        <p>Email Address</p>
        <input type="text" required  value={emailAddress} onChange={(event) => {setEmailAddress(event.target.value)}} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-2 offset-md-10">
        <button onClick={toggleFirstAccordion}>Next {'>'}</button>
      </div>
    </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Step 2: More comments</Accordion.Header>
    <Accordion.Body>
    <div className="row">
      <div className="col-4"> 
        <p>Telephone Number</p>
        <input type="text" autoComplete='off' />
      </div>
    </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Step 3: Final comments</Accordion.Header>
    <Accordion.Body>

    </Accordion.Body>
  </Accordion.Item>
</Accordion></div>;
};

export default Accordions;
