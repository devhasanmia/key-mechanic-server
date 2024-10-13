import express from 'express';
import { ProductControllers } from './product.controller';
const router = express.Router();

router.post('/', ProductControllers.addProduct);
router.get('/', ProductControllers.getAllProducts);
router.get('/:id', ProductControllers.getProdutById);
router.put('/:id', ProductControllers.updateProductById);
router.delete('/:id', ProductControllers.deleteProduct);

export const productRoutes = router