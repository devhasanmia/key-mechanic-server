import { NextFunction, Request, Response } from "express";
import { ContactServices } from "./contact.service";

const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await ContactServices.sendMessage(req.body);
    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully! ",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const getAllMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await ContactServices.getAllMessage();
      res.status(200).json({
        success: true,
        message: "Messages retrieved successfully!",
        data: data,
      });
  } catch (error) {
    next(error);
  }
};

export const ContactControllers = {
    sendMessage,
    getAllMessage
}
