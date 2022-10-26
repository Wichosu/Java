import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class.js';

const ContactComponent = ({ contact }) => {
  return (
    <tr>
      <th>
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
        { contact.connected? 'Online' : 'Offline'}
      </td>
    </tr>
  );
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
}

export default ContactComponent;