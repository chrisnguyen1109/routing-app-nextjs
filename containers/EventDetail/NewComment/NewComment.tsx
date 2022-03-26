import { Callback, Comment } from 'interfaces';
import { FormEvent, useRef } from 'react';
import classes from './NewComment.module.css';

interface NewCommentProps {
    onAddComment: (
        newComment: Omit<Comment, '_id' | 'eventId'>,
        cb: Callback
    ) => void;
    loading: boolean;
    error: string;
}

const NewComment: React.FC<NewCommentProps> = ({
    onAddComment,
    loading,
    error,
}) => {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const commentInputRef = useRef<HTMLTextAreaElement>(null);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onAddComment(
            {
                name: nameInputRef.current!.value,
                email: emailInputRef.current!.value,
                comment: commentInputRef.current!.value,
            },
            () => {
                nameInputRef.current!.value = '';
                emailInputRef.current!.value = '';
                commentInputRef.current!.value = '';
            }
        );
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.row}>
                <div className={classes.control}>
                    <label htmlFor="email">Your email</label>
                    <input
                        type="email"
                        id="email"
                        ref={emailInputRef}
                        required
                        autoComplete="new-password"
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="name">Your name</label>
                    <input
                        type="text"
                        id="name"
                        ref={nameInputRef}
                        required
                        autoComplete="new-password"
                    />
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor="comment">Your comment</label>
                <textarea
                    id="comment"
                    rows={5}
                    ref={commentInputRef}
                    required
                ></textarea>
            </div>
            {error && <p>{error}</p>}
            <button className={classes.btn} disabled={loading}>
                {loading ? 'Loading...' : 'Submit'}
            </button>
        </form>
    );
};

export default NewComment;
