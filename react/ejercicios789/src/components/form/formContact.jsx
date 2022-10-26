import React, { useRef } from 'react';
import { Contact } from '../models/contact.class.js';
import PropTypes from 'prop-types';

const FormContact = ({ append }) => {

  const nameRef = useRef('');
  const surnameRef = useRef('');
  const numberRef = useRef('');
  const emailRef = useRef('');
  const statusRef = useRef('');

  function appendContact(e){
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      surnameRef.current.value,
      numberRef.current.value,
      emailRef.current.value,
      statusRef.current.value
    );
    nameRef.current.value = '';
    surnameRef.current.value = '';
    numberRef.current.value = '';
    emailRef.current.value = '';
    append(newContact);
  }

  return (
    <form onSubmit={appendContact}>
      <span className='display-5'>Create new contacts</span>
      <div className='mb-3'>
        <label className='form-label' htmlFor='name'>Name</label>
        <input className='form-control' id='name' type='text' placeholder='Luis' ref={nameRef} required />
      </div>
      <div className='mb-3'>
        <label className='form-label' htmlFor='surname'>Surname</label>
        <input className='form-control' id='surname' type='text' placeholder='Miranda' ref={surnameRef} required />
      </div>
      <div className='mb-3'>
        <label className='form-label' htmlFor='number'>Number</label>
        <input className='form-control' id='number' type='text' placeholder='2288182100' ref={numberRef} required />
      </div>
      <div className='mb-3'>
        <label className='form-label' htmlFor='email'>Email</label>
        <input className='form-control' id='email' type='email' placeholder='wicho@dev.com' ref={emailRef} required />
      </div>
      <div className='mb-3'>
        <label className='form-label' htmlFor='status'>Status</label>
        <select className='form-select' defaultValue={true}>
          <option value={true}>
            Online
          </option>
          <option value={false}>
            Offline
          </option>
        </select>
      </div>
      <button className='btn btn-success'>Add Contact</button>
    </form>
  );
}

FormContact.propTypes = {
  append: PropTypes.func.isRequired,
}

export default FormContact;
