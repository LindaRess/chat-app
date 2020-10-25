import React from 'react';
import Contact from './components/Contact';
import UsersList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <Contact 
      name="Joseph Brooks"
      avatar="https://randomuser.me/api/portraits/men/81.jpg"
      online
      />

      <Contact 
      name="Evelyn Olson"
      avatar="https://randomuser.me/api/portraits/women/48.jpg"
      />

      <Contact 
      name="Antonio Sanders"
      avatar="https://randomuser.me/api/portraits/men/86.jpg"
      online
      />

      <UsersList />
    </div>
  );
}

export default App;
