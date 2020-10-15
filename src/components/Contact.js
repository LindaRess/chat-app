import React from 'react';
import './Contact.css';

const avatar = 'https://randomuser.me/api/portraits/men/65.jpg';
const name = 'Christopher Douglas';
const online = true;

const Contact = () => {
  return (
    <div className='Contact'>
      <img src={avatar} alt={name} className='avatar'></img>
      <div>
        <h5 className='name'>{name}</h5>
        <div className='status'>
          <span className={online ? 'status-online' : 'status-offline'}></span>
          <p className='status-text'>{online ? 'online' : 'offline'}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;