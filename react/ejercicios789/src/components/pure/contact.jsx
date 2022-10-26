import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class.js';
import '../../styles/contact.scss';

const ContactComponent = ({ contact, remove, change }) => {

  function contactStatus() {
    if(contact.connected){
      return <i className='bi bi-person-fill' onClick={() => change(contact)} style={{color: 'green'}}></i>
    } else {
      return <i className='bi bi-person-fill' onClick={() => change(contact)} style={{color: 'gray'}}></i>
    }
  }

  return (
    <tr className=''>
      <th scope='row'>
        <span>{ contact.name }</span>
      </th>
      <td>
        <span>{ contact.surname }</span>
      </td>
      <td>
        { contact.number }
      </td>
      <td>
        { contact.email }
      </td>
      <td>
        { contactStatus() }
      </td>
      <td>
        <i className='bi bi-person-x' onClick={ () => remove(contact) }></i>
      </td>
    </tr>
  );
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
}

export default ContactComponent;