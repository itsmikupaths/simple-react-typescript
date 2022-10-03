import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddContact from './components/AddContact';

export interface IState {
  contacts: {
    name: string
    age: number
    contact_number: number | string
    notes?: string
  }[]
}

function App() {
  const [contacts, setContacts] = useState<IState["contacts"]>([]);
  const defaultContacts = [
    {
      name: "Mike",
      age: 27,
      contact_number: "09215418700",
      notes: "Admin"
    },
    {
      name: "Cess",
      age: 28,
      contact_number: "0921231123",
      notes: "Wifey"
    }
  ];

  useEffect(() => {
    setContacts(defaultContacts);
  }, []);

  return (
    <div className="App">
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <AddContact contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;
