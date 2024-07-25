import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ filterContact, deleteContact }) => {
  // Ensure filterContact is called as a function to get the filtered contacts
  const filteredContacts = filterContact();

  return (
    <ul className={css.ulBox}>
      {filteredContacts.map(filteredContact => (
        <ContactListItem
          key={filteredContact.id}
          filteredContact={filteredContact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
