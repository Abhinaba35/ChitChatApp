import { createContext, useState, useEffect , useContext} from "react";
import { AuthContext, useAuthContext } from "./authContext";
import { io } from "socket.io-client";

 const SocketContext = createContext();

 export const useSocketContext = () => {
    return useContext(SocketContext);
 }

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (authUser) {
			const newSocket = io("http://localhost:5000", {
				query: { userId: authUser._id },
			});
			setSocket(newSocket);

			newSocket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			// Clean up
			return () => newSocket.disconnect();
		} else {
			if (socket) {
				socket.disconnect();
				setSocket(null);
			}
		}
	}, [authUser]); // Add authUser as dependency to reconnect if login changes

	return (
		<SocketContext.Provider value={{ socket, onlineUsers }}>
			{children}
		</SocketContext.Provider>
	);
};
