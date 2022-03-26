import { Callback, Comment } from 'interfaces';
import classes from './CommentList.module.css';

interface CommentListProps {
    comments: Comment[];
    refetch: Callback;
    loading: boolean;
    error: string;
}

const CommentList: React.FC<CommentListProps> = ({
    comments,
    refetch,
    loading,
    error,
}) => {
    return (
        <div>
            <ul className={classes.comments}>
                {comments.map(comment => (
                    <li key={comment._id}>
                        <p>{comment.comment}</p>
                        <div>
                            By{' '}
                            <address>
                                {comment.name} ({comment.email})
                            </address>
                        </div>
                    </li>
                ))}
            </ul>
            {error && <p>{error}</p>}
            <button onClick={refetch} disabled={loading}>
                {loading ? 'Loading...' : 'REFRESH'}
            </button>
        </div>
    );
};

export default CommentList;
