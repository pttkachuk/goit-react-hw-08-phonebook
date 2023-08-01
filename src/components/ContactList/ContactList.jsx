import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContact,
  StyledContactList,
  StyledDatas,
  StyledListBtn,
} from './ContactListStyled';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/contactsOperations';
import { useEffect } from 'react';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userData);
  useEffect(() => {
    if (!userData) return;

    dispatch(fetchContacts());
  }, [dispatch, userData]);
  return (
    <StyledContactList>
      {filteredContacts.map(({ id, phone, name }) => {
        return (
          <StyledContact key={id}>
            <StyledDatas>
              {name}: {phone}
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
