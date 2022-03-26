import { createComment, getCommentsByEvent } from 'controllers/comment';
import connect from 'data/connect';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
    const method = req.method;

    switch (method) {
        case 'GET':
            return getCommentsByEvent(req, res);
        case 'POST':
            return createComment(req, res);
        default:
            return res.status(404).json({ message: 'Method not allowed!' });
    }
};

export default connect(handler);
