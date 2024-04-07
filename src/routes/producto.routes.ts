import { Router } from 'express';
import { deleteProduct, getProduct, getProducts, postProduct, updateProduct } from '../controllers/producto.controller';
import { productValidator } from '../validations/producto.validations';
import { idValidator } from '../validations/generic.validation';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', idValidator, deleteProduct);
router.post('/', productValidator, postProduct);
router.put('/:id', idValidator, productValidator, updateProduct);

export default router;