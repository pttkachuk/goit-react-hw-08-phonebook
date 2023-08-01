import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { StyledMainContainer } from 'components/FileContainer/StyledContainer';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import {
  StyledContactsTitle,
  StyledSecondContTitle,
} from './StyledPages/StyledContactsPage';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <StyledMainContainer>
      <StyledContactsTitle>Add Contact</StyledContactsTitle>
      <ContactForm />
      <StyledSecondContTitle>Find Contact</StyledSecondContTitle>
      {isLoading && !error && <Loader />}
      <SearchBar />
      {error && error}
      <ContactList />
    </StyledMainContainer>
  );
};

export default Contacts;
