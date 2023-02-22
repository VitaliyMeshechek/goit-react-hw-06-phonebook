import { nanoid } from "nanoid";

export const addContacts = (name, number) => {
  return {
    type: "contacts/addContacts",
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContacts = id => {
  return {
    type: "contacts/deleteContacts",
    payload: id,
  };
};

