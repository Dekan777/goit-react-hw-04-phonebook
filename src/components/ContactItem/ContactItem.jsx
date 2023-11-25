import React from 'react';
import PropTypes from 'prop-types';
import {
  DeleteButton,
  DeleteIcon,
  Avatar,
  Character,
  Item,
  Name,
  Number,
} from './ContactItem.styled';

const ContactItem = ({ id, name, number, color, bgColor, onDeleteContact }) => {
  return (
    <Item>
      <Avatar color={color} bgColor={bgColor}>
        <Character>{name[0].toUpperCase()}</Character>
      </Avatar>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <DeleteButton onClick={() => onDeleteContact(id)}>
        <DeleteIcon />
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
