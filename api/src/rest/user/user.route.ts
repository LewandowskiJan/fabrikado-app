import { Router } from 'express';

import { getUser } from './user.controller';

const router: Router = Router();

router.post('/', getUser);

export const UserRoute: Router = router;
