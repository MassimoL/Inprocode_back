import { Router } from 'express';
import { getChart, getCharts, postChart } from '../controllers/charts.controller';
import { chartValidator } from '../validations/charts.validations';

const router = Router();

router.get('/', getCharts);
router.get('/:id', getChart);
router.post('/', chartValidator, postChart);

export default router;
