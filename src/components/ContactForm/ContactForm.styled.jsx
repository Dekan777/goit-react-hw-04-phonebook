import styled from '@emotion/styled';
import { TextField, Button } from '@mui/material';
import { theme } from '../../styles/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid orange;
  border-radius: 5px;
`;

export const FormInput = styled(TextField)(() => ({
  width: '300px',
  margin: '0 auto',
}));

export const FormSubmit = styled(Button)(() => ({
  margin: '0 auto',
  marginTop: '40px',
  width: '300px',
  backgroundColor: theme.palette.primary.light,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const Format = styled.p`
  font-size: 14px;
  width: 300px;
  margin: 0 auto;
`;
