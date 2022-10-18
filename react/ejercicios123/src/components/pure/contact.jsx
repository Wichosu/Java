import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class.js';


const ContactComponent = ({contact}) => {
  return (
    <div>
      <h1>
        Nombre: {contact.name}
      </h1>
      <h2>
        Apellido: {contact.surname}
      </h2>
      <h2>
        Email: {contact.email}
      </h2>
      <h3>
        Status: {contact.online? 'Online' : 'Offline'}
      </h3>
    </div>
  );
};


ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
