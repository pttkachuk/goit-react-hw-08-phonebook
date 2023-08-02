import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContact,
  StyledContactList,
  StyledDatas,
  StyledListBtn,
} from './ContactListStyled';
import { selectFilteredContacts } from 'redux/selectors';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <StyledContactList>
      {filteredContacts.map(({ id, number, name }) => {
        return (
          <StyledContact key={id}>
            <StyledDatas>
              {name}: {number}
            </StyledDatas>
            <StyledListBtn
              type="button"
              name="delete"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </StyledListBtn>
          </StyledContact>
        );
      })}
    </StyledContactList>
  );
};

export default ContactList;
