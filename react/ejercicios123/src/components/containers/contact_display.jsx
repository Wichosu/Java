import React from 'react';
// import PropTypes from 'prop-types';
import ContactComponent from '../pure/contact.jsx';
import { Contact } from '../../models/contact.class.js';

const ContactDisplay = () => {

  const defaultContact = new Contact('Luis', 'Miranda', 'luiscalderonmiranda@gmail.com', true);

  return (
    <div>
      <ContactComponent contact={defaultContact}/>
    </div>
  );
};

// ContactDisplay.propTypes = {

// };

export default ContactDisplay;