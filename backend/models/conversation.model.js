import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    messages: [  // ✅ Make sure it's spelled correctly
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        },
    ],
}, { timestamps: true });

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
