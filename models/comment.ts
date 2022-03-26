import mongoose from 'mongoose';

const { Schema } = mongoose;

const trimmedString = { type: String, trim: true };

const commentSchema = new Schema(
    {
        email: {
            ...trimmedString,
            required: [true, 'Email field must be required!'],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Invalid email!',
            ],
        },
        name: {
            ...trimmedString,
            required: [true, 'Name field must be required!'],
        },
        comment: {
            ...trimmedString,
            required: [true, 'Comment field must be required!'],
        },
        eventId: {
            ...trimmedString,
            required: [true, 'Event id field must be required!'],
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform(_doc, ret) {
                delete ret.createdAt;
                delete ret.updatedAt;
                delete ret.__v;

                return ret;
            },
        },
    }
);

const Comment =
    mongoose.models?.Comment || mongoose.model('Comment', commentSchema);

export default Comment;
