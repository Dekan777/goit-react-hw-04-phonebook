import styled from '@emotion/styled';
import { FaTrash } from 'react-icons/fa';
import { theme } from 'styles/theme';

export const Avatar = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: ${props => props.bgColor};
  border-radius: 50px;
  color: ${props => props.color};
`;

export const Character = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Item = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 60px 1fr 1fr 30px;
  align-items: center;
  padding: 10px 0;
`;

export const Name = styled.p``;

export const Number = styled.p``;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  width: fit-content;
  padding: 0;
  margin-left: auto;
  cursor: pointer;
`;

export const DeleteIcon = styled(FaTrash)`
  font-size: 1rem;
  color: gray;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    color: ${theme.palette.secondary.light};
  }
`;
