import mongoose from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const connect =
    (handler: NextApiHandler) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        if (mongoose.connections[0].readyState) {
            return handler(req, res);
        }

        if (
            !process.env.DATABASE ||
            !process.env.DATABASE_PASSWORD ||
            !process.env.DATABASE_USERNAME
        ) {
            return res.status(503).json({
                message: 'Connect database failed!',
            });
        }

        await mongoose.connect(process.env.DATABASE);

        console.log('Connect database successfully!');

        return handler(req, res);
    };

export default connect;
