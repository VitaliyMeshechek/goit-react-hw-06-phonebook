import { useDispatch } from 'react-redux';
import { changeFilter } from "redux/filterSlice";
import { Container, Label, Input } from "./Filter.styled";

export const Filter = () => {
  const dispatch = useDispatch();
  const filterChange = event => {
  const filterValue = event.target.value;
    dispatch(changeFilter(filterValue))
   };


  return (
    <Container>
      <Label>
      Find contacts by name
      <Input
        type="text"
        onChange={filterChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      </Label>
    </Container>
  );
}


