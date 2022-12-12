import { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import logger from '../logger';

const router = Router();
const prisma = new PrismaClient();

/* GET home page. */
router.get('/', async (req: Request, res: Response) => {
    try {
        res.status(200).json({ status: 'ok' });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ message: error });
    }
});

router.post('/submit', async (req: Request, res: Response) => {
    try {
        const { name, email, budget, wetZap } = req.body;

        const newUser = await prisma.user.upsert({
            where: {
                email,
            },
            update: {
                name,
                budget,
                wetZap,
            },
            create: {
                name,
                email,
                budget,
                wetZap,
            },
        });
        res.status(200).json({ newUser });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error });
    }
});

export default router;
