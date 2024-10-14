import express from 'express';
import { ContactControllers } from './contact.controller';
const router = express.Router();

router.post('/', ContactControllers.sendMessage);
router.get('/', ContactControllers.getAllMessage);

export const contactRoutes = router