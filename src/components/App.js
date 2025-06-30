import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(() => {
    try {
      const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      return Array.isArray(retrievedContacts) ? retrievedContacts : [];
    } catch (e) {
      console.error("Invalid data in localStorage. Resetting contacts.", e);
      return [];
    }
  });

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header value="Contact Manager" />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactid={removeContactHandler} />
    </div>
  );
}

export default App;
