import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { getRandomHexColor } from 'utils/helper';
import { Filter } from 'components/Filter/Filter';
import { Container, Wrapper, Title } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

const TOKEN_LS = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(TOKEN_LS)) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(TOKEN_LS, JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = data => {
    const isExist = contacts.some(contact => {
      return contact.name.toLowerCase() === data.name.toLowerCase();
    });

    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      {
        id: nanoid(),
        name: data.name,
        number: data.number,
        bgColor: getRandomHexColor().bgColor,
        color: getRandomHexColor().color,
      },
    ]);
  };

  const onDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const onSearchContact = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <Wrapper>
        <ContactForm onAddContact={onAddContact} />
        {contacts.length > 0 ? (
          <>
            <Filter onSearchContact={onSearchContact} />
            <ContactList
              filteredContacts={filteredContacts}
              onDeleteContact={onDeleteContact}
            />
          </>
        ) : (
          <h2>No contacts yet</h2>
        )}
      </Wrapper>
    </Container>
  );
};

export default App;
