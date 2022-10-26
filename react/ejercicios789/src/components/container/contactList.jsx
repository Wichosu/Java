import React from 'react';
import ContactComponent from '../pure/contact.jsx';
import { Contact } from '../models/contact.class.js';

const ContactList = () => {

  const example = new Contact('Luis', 'Calderon', '2281234232', 'wicho@fake.com', true);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Surname</th>
          <th scope='col'>Number</th>
          <th scope='col'>Email</th>
          <th scope='col'>Status</th>
        </tr>
      </thead>
      <tbody>
        <ContactComponent contact={example} />
      </tbody>
    </table>
  );
}

export default ContactList;
