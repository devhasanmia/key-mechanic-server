import { AppError } from "../../errors/AppError";
import { IContact } from "./contact.interface";
import Contact from "./contact.model";

const sendMessage = async (payload: IContact) => {
  const data = await Contact.create(payload);
  return data;
};

const getAllMessage = async () => {
  const data = await Contact.find().sort({ createdAt: -1 });
  if (data.length === 0) {
    throw AppError(404, "No messages found.");
  }
  return data;
};

export const ContactServices = {
  sendMessage,
  getAllMessage,
};
