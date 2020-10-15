import React from 'react';
import './Contact.css';
import PropTypes from "prop-types";


const Contact = (props) => {
  return (
    <div className='Contact'>
      <img src={props.avatar} alt={props.name} className='avatar'></img>
      <div>
        <h5 className='name'>{props.name}</h5>
        <div className='status'>
          <span className={props.online ? 'status-online' : 'status-offline'}></span>
          <p className='status-text'>{props.online ? 'online' : 'offline'}</p>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool
};

export default Contact;