import PropTypes from "prop-types";

import { ContactItem} from './ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
    const searchName = state => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
    const data = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(data),
    );
  };
  const contacts = useSelector(searchName);


  return (
    <List>
      {contacts.map(({ id, name, number }) => (
       <ContactItem key={id} id={id} name={name} number={number} />
       ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

