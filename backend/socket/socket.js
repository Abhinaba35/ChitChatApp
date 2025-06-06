import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:3000"], // your frontend URL
		methods: ["GET", "POST"],
	},
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

// Track userId -> socketId
const userSocketMap = {};

io.on("connection", (socket) => {
	const userId = socket.handshake.query.userId;

	console.log(`🔌 User connected: ${socket.id}, userId: ${userId}`);

	if (userId && userId !== "undefined") {
		userSocketMap[userId] = socket.id;
	}

	// Send list of online users
	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	// Handle disconnection
	socket.on("disconnect", () => {
		console.log(`❌ User disconnected: ${socket.id}`);

		// Remove user from map
		for (const key in userSocketMap) {
			if (userSocketMap[key] === socket.id) {
				delete userSocketMap[key];
				break;
			}
		}

		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };
