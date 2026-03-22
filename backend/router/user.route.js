import {Router} from 'express';
import { profile } from '../controllers/profile.js';
import { verifyToken } from '../middleware/authmiddleware.js';

const userRoute = Router();

userRoute.get('/user', verifyToken , profile)

export default userRoute;