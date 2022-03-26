import { Callback, Comment } from 'interfaces';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface FetchOptions {
    enable: boolean;
}

export const useComments = (
    eventId: string,
    { enable }: FetchOptions = { enable: true }
) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const [error, setError] = useState<string>('');
    const [refetchStatus, setRefetchStatus] = useState<boolean>(false);

    const controller = new AbortController();
    const signal = controller.signal;

    const refetch = () => setRefetchStatus(!refetchStatus);

    useEffect(() => {
        if (enable) {
            (async () => {
                setLoading(true);

                try {
                    const response = await fetch(`/api/comment/${eventId}`, {
                        signal,
                    });
                    const data = await response.json();

                    if (data.message !== 'Success')
                        throw new Error(data.message);

                    setComments(data.records.comments);
                    setError('');
                } catch (error: any) {
                    setError(error.message);
                    toast.error(error.message);
                } finally {
                    setLoading(false);
                }
            })();

            return () => controller.abort();
        }
    }, [refetchStatus, enable]);

    return { loading, comments, error, refetch, setComments };
};

export const useCreateComment = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [comment, setComment] = useState<Comment>();
    const [error, setError] = useState<string>('');

    const controller = new AbortController();
    const signal = controller.signal;

    const createComment = async (
        newComment: Omit<Comment, '_id'>,
        cb: Callback
    ) => {
        setLoading(true);

        try {
            const response = await fetch(`/api/comment/${newComment.eventId}`, {
                method: 'POST',
                body: JSON.stringify(newComment),
                headers: {
                    'Content-Type': 'application/json',
                },
                signal,
            });
            const data = await response.json();

            if (data.message !== 'Success') throw new Error(data.message);

            setComment(data.record.comment);
            setError('');
            cb();
        } catch (error: any) {
            console.log(error);
            setError(error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => controller.abort();
    }, []);

    return { loading, comment, error, createComment };
};
