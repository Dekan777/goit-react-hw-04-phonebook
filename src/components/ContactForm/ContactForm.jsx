import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { Form, FormInput, FormSubmit, Format } from './ContactForm.styled';

const NumberMask = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-00-00"
      definitions={{
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={value => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = event => {
    let { name, value } = event.target;

    if (name === 'name') {
      value = value.replace(/[^a-zA-Zа-яА-ЯіІʼ\s-]/g, '');
    }

    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleAddContact = event => {
    event.preventDefault();

    onAddContact(formData);
    setFormData({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleAddContact}>
      <FormInput
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
        name="name"
        value={formData.name}
        onChange={handleChange}
        style={{ marginBottom: '40px' }}
        required
      />
      <FormInput
        id="formatted-text-mask-input"
        label="Number"
        variant="outlined"
        size="small"
        name="number"
        value={formData.number}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
        InputProps={{
          inputComponent: NumberMask,
        }}
        required
      />
      <Format>Format: (012) 345-67-89</Format>
      <FormSubmit variant="contained" type="submit">
        Add contact
      </FormSubmit>
    </Form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
