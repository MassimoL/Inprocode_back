import {Router} from 'express';
import {deleteDate, getDate, getListDates, postDate} from '../controllers/fullcalendar.controller';
import { fullCalendarValidator } from '../validations/fullcalendar.validations';
import { idValidator } from '../validations/generic.validation';

const router = Router();

router.get('/', getListDates);
router.get('/:id', getDate);
router.delete('/:id',idValidator, deleteDate);
router.post('/',fullCalendarValidator, postDate);

export default router;