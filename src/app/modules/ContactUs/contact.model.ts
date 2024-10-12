import { model, Schema } from "mongoose";
import { IContact } from "./Contact.interface";

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contact = model<IContact>("Contact", contactSchema);

export default Contact;
