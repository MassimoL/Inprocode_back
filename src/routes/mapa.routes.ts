import {Router} from 'express';
import {deleteMap, getMap, getMaps, postMap, updateMap} from '../controllers/mapa.controller';

const router = Router();

router.get('/', getMaps);
router.get('/:id', getMap);
router.delete('/:id', deleteMap);
router.post('/', postMap);
router.put('/:id', updateMap);

export default router;