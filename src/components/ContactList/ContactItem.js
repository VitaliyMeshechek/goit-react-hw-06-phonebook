import PropTypes from "prop-types";

import { Button, Item, Data } from "./ContactList.styled";
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/contactsSlice";

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
    <Item key={id}>
      <Data>
        {name} : {number}
      </Data>
      <Button onClick={onDelete} type="button" name="delete">
        delete
      </Button>
      </Item>
    </>
  );
}


ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
