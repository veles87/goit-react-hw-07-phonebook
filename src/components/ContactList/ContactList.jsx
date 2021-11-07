import { useEffect } from 'react';
import { fetchAllContacts } from '../../redux/contactsOperations';
import * as contactsSelectors from '../../redux/contacts-selectors.js';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from '../ContactItem';
import { ListContact } from './ContactList.styled';

export default function ContactList() {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <ListContact>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ListContact>
  );
}
