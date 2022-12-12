import { PrismaClient } from '@prisma/client';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import httpServer from 'http';
import morgan from 'morgan';
import path from 'path';

import logger from './logger';
import api from './routes';

dotenv.config();
const prisma = new PrismaClient();

const port = process.env.PORT || 3000;
const app = express();
const server = httpServer.createServer(app);

const whitelistDomains = ['http://localhost:5173', 'http://127.0.0.1:5173'];

app.use(
    cors({
        origin: whitelistDomains,
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        credentials: true,
    }),
);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

// catch 404 and forward to error handler
app.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Route not Found' });
});

const onListening = async () => {
    try {
        const addr = server.address();
        console.log(`Express server:${JSON.stringify(addr, null, 4)} Listening on: ${port}`);
    } catch (error) {
        logger.error(error);
    }
};

server.listen(port);
server.on('listening', onListening);

export default app;
