import mongoose from "mongoose";
import Posts from "./PostModel";

const PostTypesSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },
        // posts: [Posts],
    },
    {
        timestamps: true,
    }
);

const PostTypes = mongoose.model("PostType", PostTypesSchema);

export default PostTypes;