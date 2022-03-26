import { useComments, useCreateComment } from 'hooks/useComment';
import { Callback, Comment } from 'interfaces';
import { useEffect } from 'react';
import CommentList from '../CommentList/CommentList';
import NewComment from '../NewComment/NewComment';
import classes from './EventComment.module.css';

interface EventCommentProps {
    eventId: string;
}

const EventComment: React.FC<EventCommentProps> = ({ eventId }) => {
    const { loading, error, createComment, comment } = useCreateComment();
    const {
        comments,
        refetch,
        loading: loadingComments,
        error: errorComments,
        setComments,
    } = useComments(eventId);

    useEffect(() => {
        comment && setComments(prev => [...prev, comment]);
    }, [comment]);

    const addCommentHandler = (
        newComment: Omit<Comment, '_id' | 'eventId'>,
        cb: Callback
    ) => {
        createComment(
            {
                ...newComment,
                eventId,
            },
            cb
        );
    };

    return (
        <section className={classes.comments}>
            <NewComment
                onAddComment={addCommentHandler}
                loading={loading}
                error={error}
            />
            <CommentList
                comments={comments}
                refetch={refetch}
                loading={loadingComments}
                error={errorComments}
            />
        </section>
    );
};

export default EventComment;
