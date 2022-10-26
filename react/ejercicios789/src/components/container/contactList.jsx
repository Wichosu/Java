import React from 'react';
import ContactComponent from '../pure/contact.jsx';
import { Contact } from '../models/contact.class.js';

const ContactList = () => {

  const example = new Contact('Luis', 'Calderon', '2281234232', 'wicho@fake.com');

  return (
    <div>
      <ContactComponent contact={example}/>
    </div>
  );
}

export default ContactList;
