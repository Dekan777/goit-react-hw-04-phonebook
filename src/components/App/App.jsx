import { Component } from 'react';
import { nanoid } from 'nanoid';

import { getRandomHexColor } from 'utils/helper';
import { Filter } from 'components/Filter/Filter';
import { Container, Wrapper, Title } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

const TOKEN_LS = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem(TOKEN_LS)) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem(TOKEN_LS)),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    console.log('updated');
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem(TOKEN_LS, JSON.stringify(this.state.contacts));
    }
  }

  onAddContact = data => {
    const isExist = this.state.contacts.some(contact => {
      return contact.name.toLowerCase() === data.name.toLowerCase();
    });

    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name: data.name,
          number: data.number,
          bgColor: getRandomHexColor().bgColor,
          color: getRandomHexColor().color,
        },
      ],
    }));
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onSearchContact = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <Wrapper>
          <ContactForm onAddContact={this.onAddContact} />
          {this.state.contacts.length > 0 ? (
            <>
              <Filter onSearchContact={this.onSearchContact} />
              <ContactList
                filteredContacts={filteredContacts}
                onDeleteContact={this.onDeleteContact}
              />
            </>
          ) : (
            <h2>No contacts yet</h2>
          )}
        </Wrapper>
      </Container>
    );
  }
}

export default App;
