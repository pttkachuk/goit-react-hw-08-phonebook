import { useDispatch, useSelector } from 'react-redux';
import {
  StyledBtn,
  StyledContactDiv,
  StyledContactForm,
  StyledInput,
  StyledLabel,
  StyledSpan,
} from './ContactFormStyled';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/contactsOperations';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const name = elements.contactName.value;
    const number = elements.contactNumber.value;
    if (
      contacts.some(value => value.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
    event.currentTarget.reset();
  };

  return (
    <StyledContactDiv>
      <StyledContactForm onSubmit={handleSubmit}>
        <StyledLabel>
          <StyledSpan>Name</StyledSpan>
          <StyledInput
            type="text"
            name="contactName"
            placeholder="Contact name..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledSpan>Number</StyledSpan>
          <StyledInput
            type="tel"
            name="contactNumber"
            placeholder="Contact number..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLabel>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledContactForm>
    </StyledContactDiv>
  );
}
