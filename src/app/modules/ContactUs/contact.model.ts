import { model, Schema } from "mongoose";
import { IContact } from "./contact.interface";

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Name is a required field"],
    },
    email: {
      type: String,
      required: [true, "Email is a required Field"],
    },
    message: {
      type: String,
      required: [true, "Message is required Field"],
    },
  },
  { timestamps: true }
);

const Contact = model<IContact>("Contact", contactSchema);

export default Contact;
