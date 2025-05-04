import User from "../models/user.model.js"; // ✅ Add this if missing


export const getUsrsForSidebar = async (req, res) => {
    try {
        console.log("Inside getUsersForSidebar");
        console.log("req.user:", req.user);

        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
