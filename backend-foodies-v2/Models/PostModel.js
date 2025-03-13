import mongoose from "mongoose";

const postsSchema = mongoose.Schema(
    {
        post_type: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "PostType"
        },
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        food: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
        },
        author: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Posts = mongoose.model("Post", postsSchema);

export default Posts;