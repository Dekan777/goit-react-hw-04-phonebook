import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { Header, List, Section, Title } from './ContactList.styled';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <Section>
      <>
        <Header>
          <p>Name</p>
          <p></p>
          <p>Phone Number</p>
          <p></p>
        </Header>

        <hr style={{ margin: '20px 0' }}></hr>

        <Title>Contacts ({filteredContacts.length})</Title>
        {filteredContacts.length > 0 ? (
          <List>
            {filteredContacts.map(contact => (
              <ContactItem
                key={contact.id}
                onDeleteContact={onDeleteContact}
                {...contact}
              />
            ))}
          </List>
        ) : (
          <h2>Contacts not found</h2>
        )}
      </>
    </Section>
  );
};

ContactItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      bgColor: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
