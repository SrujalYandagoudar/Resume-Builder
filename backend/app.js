import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import authRoute from './router/auth.router.js';
import dotenv from 'dotenv'
import userRoute from './router/user.route.js';

dotenv.config();
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoute );
app.use('/api', userRoute);

export default app;