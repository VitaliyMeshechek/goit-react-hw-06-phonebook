import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contactsSlice";
import { getContacts } from "redux/selectors";
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset } = useForm({
      defaultValues: {
      name: '',
      number: '',
  },
  mode: "onBlur",
});

  console.log(contacts);

  const onSubmit = (event) => {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === event.name.toLowerCase()) {
        alert(`The entered ${event.name} already exists in contacts! Please enter another name!`);
        return;
      };
      if (contact.number === event.number) {
        alert(`The entered ${event.number} already exists in contacts! Please enter another number!`);
        return;
      };
    }

      dispatch(addContact(event.name, event.number));

      reset();
  }

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Name
        <Input
          {...register("name")}
          placeholder="Vitaliy Meshechek"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        {errors.name && <p>Fields must be filled!</p>}
      </Label>
      <Label>
        Number
        <Input
          {...register("number")}
          placeholder="283-34-54"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        {errors.number && <p>Fields must be filled!</p>}
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
    );
}































// const [name, setName] = useState('');
// const [number, setNumber] = useState('');

// const handleChange = event => {
//   const { name, value } = event.currentTarget;

//   switch (name) {
//     case 'name':
//       setName(value);
//       break;

//     case 'number':
//       setNumber(value);
//       break;

//     default:
//       return;
//   }
// };



// const checkName = name => {
//   console.log('name', name);
//   return contacts.find(
//     contact => contact.name.toLowerCase() === name.toLowerCase(),
//   );
// };

// const checkNumber = number => {
//   return contacts.find(contact => contact.number === number);
// };

// const handleSubmit = e => {
//   e.preventDefault();

//   if (checkName(name)) {
//     alert(`${name} is already in contacts`);
//   } else if (checkNumber(number)) {
//     alert(`${number} is already in your contacts!`);
//   } else {
//     dispatch(addContact(name, number));
//   }

// };
