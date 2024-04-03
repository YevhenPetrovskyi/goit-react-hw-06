import { useSelector } from 'react-redux';
import { selectContacts, selectNameFilter } from '../../redux/selectors';

import Contact from './Contact';

import styles from './ContactList.module.css';

function getVisibleContacts(contacts, filter) {
  if (filter.length > 0) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    return contacts;
  }
}

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={styles.contactList}>
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
}

export default ContactList;
