import { IContact } from "./contact.interface";
import Contact from "./contact.model";

const sendMessage = async (payload: IContact) => {
  const data = Contact.create(payload);
  return data;
};

export const ContactServices = {
  sendMessage,
};
