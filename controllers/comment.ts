import Comment from 'models/comment';
import { NextApiRequest, NextApiResponse } from 'next';

export const getCommentsByEvent = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try {
        const eventId = req.query.eventId;

        const matchingComments = await Comment.find({ eventId });

        if (!matchingComments) {
            throw new Error('Get comments failed!');
        }

        return res.status(200).json({
            message: 'Success',
            records: { comments: matchingComments },
        });
    } catch (error: any) {
        if (error.message) {
            return res.status(500).json({ message: error.message });
        }

        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

export const createComment = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try {
        const eventId = req.query.eventId;

        const newComment = await Comment.create({
            ...req.body,
            eventId,
        });

        if (!newComment) {
            throw new Error('Create comment failed!');
        }

        return res
            .status(201)
            .json({ message: 'Success', record: { comment: newComment } });
    } catch (error: any) {
        if (error.message) {
            return res.status(500).json({ message: error.message });
        }

        return res.status(500).json({ message: 'Something went wrong!' });
    }
};
