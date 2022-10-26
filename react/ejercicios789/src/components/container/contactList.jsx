import React, { useState } from 'react';
import ContactComponent from '../pure/contact.jsx';
import { Contact } from '../models/contact.class.js';
import FormContact from '../form/formContact.jsx';

const ContactList = () => {

  const example = new Contact('Luis', 'Calderon', '2281234232', 'wicho@fake.com', true);

  const [contacts, setContacts] = useState([example]);

  function appendContact(contact) {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  return (
    <div>
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
          {contacts.map((contact, index) => {
            return (
              <ContactComponent 
                key={index}
                contact={contact}
              />
            )
          })}
        </tbody>
      </table>
      <FormContact append={ appendContact }/>
    </div>
  );
}

export default ContactList;
