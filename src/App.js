import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';



export const App = () => {
  const contacts = useSelector(getContacts);
  const contactsLength = contacts.length;

   return (
     <div>
       <h1 title="Phonebook">Phonebook</h1>
       <ContactForm />
       <h2 title="Contact">Contact</h2>
       <Filter />
       {contactsLength > 0 ? (
        <ContactList />
      ) : (
        <p>Currently your phonebook has no contacts. Please add them.</p>
      )}
     </div>
   );
}


