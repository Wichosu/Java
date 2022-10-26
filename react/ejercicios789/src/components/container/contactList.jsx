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

  function changeStatus(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].connected = !tempContacts[index].connected;
    setContacts(tempContacts);
  }

  function removeContact(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }

  return (
    <div>
      <table className='table align-middle table-striped'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Surname</th>
            <th scope='col'>Number</th>
            <th scope='col'>Email</th>
            <th scope='col'>Status</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <ContactComponent 
                key={index}
                contact={contact}
                change={ changeStatus }
                remove={ removeContact }
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
