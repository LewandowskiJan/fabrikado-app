import { Router } from 'express';

import { getUser, getUserById } from './user.controller';

const router: Router = Router();

router.post('/login', getUser);
router.get('/:userId', getUserById);

export const UserRoute: Router = router;
